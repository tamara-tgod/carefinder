import { createClient } from "../lib/supabase/server"
import  {Hospital} from "@/types/hospital"

export default async function getHospitals(page = 1, pageSize = 10): Promise<Hospital[]>{
    const supabase = await createClient()
    const from = (page - 1) * pageSize
    const to = from + pageSize - 1

    const {data, error} = await supabase 
    .from("hospitals") 
    .select("*")
    .range(from, to)

    if (error) {
        throw error;
    }

    return data
}

export async function getHospitalById(id: string): Promise<Hospital> {
    const supabase = await createClient()
    
    const {data, error} = await supabase
    .from("hospitals")
    .select("*")
    .eq("id", id)
    .single()

    if (error) {
        console.log("Supabase error:", error)
        throw error
    }

    return data
}

export async function getStats() {
    const supabase = await createClient()

    // total hospitals
     const {count: hospitalCount, error: hospitalError} = await supabase
    .from("hospitals")
    .select("*", {count: "exact", head: true})

    if (hospitalError) {
        console.log("supabase error:", hospitalError)
        throw hospitalError
    }

    // total reviews
    const {count: reviewCount, error: reviewError} = await supabase
    .from("reviews")
    .select("*", {count: "exact", head: true})

    if (reviewError) {
        console.log("Supabase error:", reviewError)
        throw reviewError
    }

    // pending reviews
    const {count: pendingReviewCount, error: pendingReviewError} = await supabase
    .from("reviews")
    .select("*", {count: "exact", head:true})
    .eq("status", "pending")
     
    if (pendingReviewError) {
        console.log("Supabase error:", pendingReviewError)
        throw pendingReviewError
    }
    
    // total public hospitals
    const {count: publicHospitalCount, error: publicHospitalError} = await supabase
    .from("hospitals")
    .select("*", {count: "exact", head: true})
    .eq("ownership_type", "public")

    if (publicHospitalError) {
        console.log("Supabase error:", publicHospitalError)
        throw publicHospitalError
    }

    // total private hospitals
    const {count: privateHospitalCount, error: privateHospitalError} = await supabase
    .from("hospitals")
    .select("*", {count: "exact", head: true})
    .eq("ownership_type", "private")

    if (privateHospitalError) {
        console.log("Supabase error:", privateHospitalError)
        throw privateHospitalError
    }

    return {
       totalHospitals: hospitalCount,
       totalReviews: reviewCount,
       totalPublicHospitals: publicHospitalCount,
       totalPrivateHospitals: privateHospitalCount,
       pendingReviews: pendingReviewCount

    }
}