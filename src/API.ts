/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMilitantInput = {
  id?: string | null,
  name: string,
  nni: string,
  phone?: string | null,
};

export type ModelMilitantConditionInput = {
  name?: ModelStringInput | null,
  nni?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelMilitantConditionInput | null > | null,
  or?: Array< ModelMilitantConditionInput | null > | null,
  not?: ModelMilitantConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Militant = {
  __typename: "Militant",
  id: string,
  name: string,
  nni: string,
  phone?: string | null,
  partisans?: ModelPartisanConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPartisanConnection = {
  __typename: "ModelPartisanConnection",
  items:  Array<Partisan | null >,
  nextToken?: string | null,
};

export type Partisan = {
  __typename: "Partisan",
  id: string,
  first_name: string,
  last_name?: string | null,
  nni: string,
  place_of_birth?: string | null,
  number_in_office?: string | null,
  genre?: string | null,
  office_id?: string | null,
  militant?: Militant | null,
  office?: Office | null,
  createdAt: string,
  updatedAt: string,
  militantPartisansId?: string | null,
};

export type Office = {
  __typename: "Office",
  id: string,
  label?: string | null,
  commune?: string | null,
  center?: string | null,
  mougataa?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMilitantInput = {
  id: string,
  name?: string | null,
  nni?: string | null,
  phone?: string | null,
};

export type DeleteMilitantInput = {
  id: string,
};

export type CreatePartisanInput = {
  id?: string | null,
  first_name: string,
  last_name?: string | null,
  nni: string,
  place_of_birth?: string | null,
  number_in_office?: string | null,
  genre?: string | null,
  office_id?: string | null,
  militantPartisansId?: string | null,
};

export type ModelPartisanConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  nni?: ModelStringInput | null,
  place_of_birth?: ModelStringInput | null,
  number_in_office?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  office_id?: ModelStringInput | null,
  and?: Array< ModelPartisanConditionInput | null > | null,
  or?: Array< ModelPartisanConditionInput | null > | null,
  not?: ModelPartisanConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  militantPartisansId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePartisanInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  nni?: string | null,
  place_of_birth?: string | null,
  number_in_office?: string | null,
  genre?: string | null,
  office_id?: string | null,
  militantPartisansId?: string | null,
};

export type DeletePartisanInput = {
  id: string,
};

export type CreateOfficeInput = {
  id?: string | null,
  label?: string | null,
  commune?: string | null,
  center?: string | null,
  mougataa?: string | null,
};

export type ModelOfficeConditionInput = {
  label?: ModelStringInput | null,
  commune?: ModelStringInput | null,
  center?: ModelStringInput | null,
  mougataa?: ModelStringInput | null,
  and?: Array< ModelOfficeConditionInput | null > | null,
  or?: Array< ModelOfficeConditionInput | null > | null,
  not?: ModelOfficeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateOfficeInput = {
  id: string,
  label?: string | null,
  commune?: string | null,
  center?: string | null,
  mougataa?: string | null,
};

export type DeleteOfficeInput = {
  id: string,
};

export type ModelMilitantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nni?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMilitantFilterInput | null > | null,
  or?: Array< ModelMilitantFilterInput | null > | null,
  not?: ModelMilitantFilterInput | null,
};

export type ModelMilitantConnection = {
  __typename: "ModelMilitantConnection",
  items:  Array<Militant | null >,
  nextToken?: string | null,
};

export type ModelPartisanFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  nni?: ModelStringInput | null,
  place_of_birth?: ModelStringInput | null,
  number_in_office?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  office_id?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPartisanFilterInput | null > | null,
  or?: Array< ModelPartisanFilterInput | null > | null,
  not?: ModelPartisanFilterInput | null,
  militantPartisansId?: ModelIDInput | null,
};

export type ModelOfficeFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  commune?: ModelStringInput | null,
  center?: ModelStringInput | null,
  mougataa?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOfficeFilterInput | null > | null,
  or?: Array< ModelOfficeFilterInput | null > | null,
  not?: ModelOfficeFilterInput | null,
};

export type ModelOfficeConnection = {
  __typename: "ModelOfficeConnection",
  items:  Array<Office | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMilitantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nni?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMilitantFilterInput | null > | null,
  or?: Array< ModelSubscriptionMilitantFilterInput | null > | null,
  militantPartisansId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPartisanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  nni?: ModelSubscriptionStringInput | null,
  place_of_birth?: ModelSubscriptionStringInput | null,
  number_in_office?: ModelSubscriptionStringInput | null,
  genre?: ModelSubscriptionStringInput | null,
  office_id?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPartisanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPartisanFilterInput | null > | null,
};

export type ModelSubscriptionOfficeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  commune?: ModelSubscriptionStringInput | null,
  center?: ModelSubscriptionStringInput | null,
  mougataa?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOfficeFilterInput | null > | null,
  or?: Array< ModelSubscriptionOfficeFilterInput | null > | null,
};

export type CreateMilitantMutationVariables = {
  input: CreateMilitantInput,
  condition?: ModelMilitantConditionInput | null,
};

export type CreateMilitantMutation = {
  createMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMilitantMutationVariables = {
  input: UpdateMilitantInput,
  condition?: ModelMilitantConditionInput | null,
};

export type UpdateMilitantMutation = {
  updateMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMilitantMutationVariables = {
  input: DeleteMilitantInput,
  condition?: ModelMilitantConditionInput | null,
};

export type DeleteMilitantMutation = {
  deleteMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePartisanMutationVariables = {
  input: CreatePartisanInput,
  condition?: ModelPartisanConditionInput | null,
};

export type CreatePartisanMutation = {
  createPartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type UpdatePartisanMutationVariables = {
  input: UpdatePartisanInput,
  condition?: ModelPartisanConditionInput | null,
};

export type UpdatePartisanMutation = {
  updatePartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type DeletePartisanMutationVariables = {
  input: DeletePartisanInput,
  condition?: ModelPartisanConditionInput | null,
};

export type DeletePartisanMutation = {
  deletePartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type CreateOfficeMutationVariables = {
  input: CreateOfficeInput,
  condition?: ModelOfficeConditionInput | null,
};

export type CreateOfficeMutation = {
  createOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOfficeMutationVariables = {
  input: UpdateOfficeInput,
  condition?: ModelOfficeConditionInput | null,
};

export type UpdateOfficeMutation = {
  updateOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOfficeMutationVariables = {
  input: DeleteOfficeInput,
  condition?: ModelOfficeConditionInput | null,
};

export type DeleteOfficeMutation = {
  deleteOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMilitantQueryVariables = {
  id: string,
};

export type GetMilitantQuery = {
  getMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMilitantsQueryVariables = {
  filter?: ModelMilitantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMilitantsQuery = {
  listMilitants?:  {
    __typename: "ModelMilitantConnection",
    items:  Array< {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPartisanQueryVariables = {
  id: string,
};

export type GetPartisanQuery = {
  getPartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type ListPartisansQueryVariables = {
  filter?: ModelPartisanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartisansQuery = {
  listPartisans?:  {
    __typename: "ModelPartisanConnection",
    items:  Array< {
      __typename: "Partisan",
      id: string,
      first_name: string,
      last_name?: string | null,
      nni: string,
      place_of_birth?: string | null,
      number_in_office?: string | null,
      genre?: string | null,
      office_id?: string | null,
      createdAt: string,
      updatedAt: string,
      militantPartisansId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOfficeQueryVariables = {
  id: string,
};

export type GetOfficeQuery = {
  getOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOfficesQueryVariables = {
  filter?: ModelOfficeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOfficesQuery = {
  listOffices?:  {
    __typename: "ModelOfficeConnection",
    items:  Array< {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMilitantSubscriptionVariables = {
  filter?: ModelSubscriptionMilitantFilterInput | null,
};

export type OnCreateMilitantSubscription = {
  onCreateMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMilitantSubscriptionVariables = {
  filter?: ModelSubscriptionMilitantFilterInput | null,
};

export type OnUpdateMilitantSubscription = {
  onUpdateMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMilitantSubscriptionVariables = {
  filter?: ModelSubscriptionMilitantFilterInput | null,
};

export type OnDeleteMilitantSubscription = {
  onDeleteMilitant?:  {
    __typename: "Militant",
    id: string,
    name: string,
    nni: string,
    phone?: string | null,
    partisans?:  {
      __typename: "ModelPartisanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePartisanSubscriptionVariables = {
  filter?: ModelSubscriptionPartisanFilterInput | null,
};

export type OnCreatePartisanSubscription = {
  onCreatePartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type OnUpdatePartisanSubscriptionVariables = {
  filter?: ModelSubscriptionPartisanFilterInput | null,
};

export type OnUpdatePartisanSubscription = {
  onUpdatePartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type OnDeletePartisanSubscriptionVariables = {
  filter?: ModelSubscriptionPartisanFilterInput | null,
};

export type OnDeletePartisanSubscription = {
  onDeletePartisan?:  {
    __typename: "Partisan",
    id: string,
    first_name: string,
    last_name?: string | null,
    nni: string,
    place_of_birth?: string | null,
    number_in_office?: string | null,
    genre?: string | null,
    office_id?: string | null,
    militant?:  {
      __typename: "Militant",
      id: string,
      name: string,
      nni: string,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    office?:  {
      __typename: "Office",
      id: string,
      label?: string | null,
      commune?: string | null,
      center?: string | null,
      mougataa?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    militantPartisansId?: string | null,
  } | null,
};

export type OnCreateOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionOfficeFilterInput | null,
};

export type OnCreateOfficeSubscription = {
  onCreateOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionOfficeFilterInput | null,
};

export type OnUpdateOfficeSubscription = {
  onUpdateOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionOfficeFilterInput | null,
};

export type OnDeleteOfficeSubscription = {
  onDeleteOffice?:  {
    __typename: "Office",
    id: string,
    label?: string | null,
    commune?: string | null,
    center?: string | null,
    mougataa?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
