export type CategoryType = 
  | 'unternehmensgrafiken'
  | 'produktfotos'
  | 'produktvideos'
  | 'reels-tiktok'
  | 'sportcontent'

export type ToolType = 
  | 'canva'
  | 'photoshop'
  | 'premiere-pro'
  | 'capcut'
  | 'filmen'
  | 'cutten'
  | 'fotografie'

export interface MediaItem {
  id: string
  type: 'photo' | 'video'
  title: string
  description?: string
  url: string
  thumbnail?: string
  category: CategoryType
  date?: string
  tools?: ToolType[]
  client?: string
  youtubeId?: string // YouTube Video ID für große Videos
}

export interface Category {
  id: CategoryType
  name: string
  description: string
  icon: string
  color: string
}

