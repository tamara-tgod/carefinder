export interface Hospital {
  id: string
  name: string
  image_url: string | null
  address: string
  phone: string | null
  email: string | null
  specialties: string[]
  visiting_hours: string | null
  description: string | null
  latitude: number
  longitude: number
  ownership_type: 'public' | 'private'
  created_at: string
  status: 'pending' | 'verified'
}