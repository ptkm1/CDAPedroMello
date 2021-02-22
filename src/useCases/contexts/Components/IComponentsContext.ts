interface IComponentsContext { 
  modalOpen: boolean 
  setModalOpen: (prop: boolean) => void
  idEntity: any
  setIdEntity: (prop: string) => void
}

export type { IComponentsContext }