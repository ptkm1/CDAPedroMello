interface IComponentsContext { 
  modalOpen: boolean 
  setModalOpen: (prop: boolean) => void
  idEntity: any
  setIdEntity: (prop: string) => void
  setRadioButtonValue: (prop: string) => void
  radioButtonValue: any
}

export type { IComponentsContext }