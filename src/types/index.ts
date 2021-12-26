export interface PhotoType {
  id: string
  label: string
  url: string
}

export interface OverlayProps {
  currentActive: string | null
  label: string
  txt?: boolean
  handleDeletePhoto?: (id: string) => Promise<void>
  id?: string
}

export type StateSetterBool = React.Dispatch<React.SetStateAction<boolean>>

export interface ClientType {
  setItems: React.Dispatch<React.SetStateAction<PhotoType[] | null>>
  setShouldRefresh: StateSetterBool
}
