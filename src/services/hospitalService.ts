import { createClient } from "../lib/supabase/server"
import  {Hospital} from "@/types/hospital"

export default async function getHospitals(): Promise<Hospital[]>{
    const supabase = await createClient()

    const {data, error} = await supabase 
    .from("hospitals") 
    .select("*"); 

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

     const {count: hospitalCount, error: hospitalError} = await supabase
    .from("hospitals")
    .select("*", {count: "exact", head: true})

    if (hospitalError) {
        console.log("supabase error:", hospitalError)
        throw hospitalError
    }

    const {count: reviewCount, error: reviewError} = await supabase
    .from("reviews")
    .select("*", {count: "exact", head: true})

    if (reviewError) {
        console.log("Supabase error:", reviewError)
        throw reviewError
    }
    
    const {count: publicHospitalCount, error: publicHospitalError} = await supabase
    .from("hospitals")
    .select("*", {count: "exact", head: true})
    .eq("ownership_type", "public")

    if (publicHospitalError) {
        console.log("Supabase error:", publicHospitalError)
        throw publicHospitalError
    }

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

    }
}