/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMilitant = /* GraphQL */ `subscription OnCreateMilitant($filter: ModelSubscriptionMilitantFilterInput) {
  onCreateMilitant(filter: $filter) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMilitantSubscriptionVariables,
  APITypes.OnCreateMilitantSubscription
>;
export const onUpdateMilitant = /* GraphQL */ `subscription OnUpdateMilitant($filter: ModelSubscriptionMilitantFilterInput) {
  onUpdateMilitant(filter: $filter) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMilitantSubscriptionVariables,
  APITypes.OnUpdateMilitantSubscription
>;
export const onDeleteMilitant = /* GraphQL */ `subscription OnDeleteMilitant($filter: ModelSubscriptionMilitantFilterInput) {
  onDeleteMilitant(filter: $filter) {
    id
    name
    nni
    phone
    partisans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMilitantSubscriptionVariables,
  APITypes.OnDeleteMilitantSubscription
>;
export const onCreatePartisan = /* GraphQL */ `subscription OnCreatePartisan($filter: ModelSubscriptionPartisanFilterInput) {
  onCreatePartisan(filter: $filter) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartisanSubscriptionVariables,
  APITypes.OnCreatePartisanSubscription
>;
export const onUpdatePartisan = /* GraphQL */ `subscription OnUpdatePartisan($filter: ModelSubscriptionPartisanFilterInput) {
  onUpdatePartisan(filter: $filter) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartisanSubscriptionVariables,
  APITypes.OnUpdatePartisanSubscription
>;
export const onDeletePartisan = /* GraphQL */ `subscription OnDeletePartisan($filter: ModelSubscriptionPartisanFilterInput) {
  onDeletePartisan(filter: $filter) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    office_id
    militant {
      id
      name
      nni
      phone
      createdAt
      updatedAt
      __typename
    }
    office {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    militantPartisansId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartisanSubscriptionVariables,
  APITypes.OnDeletePartisanSubscription
>;
export const onCreateOffice = /* GraphQL */ `subscription OnCreateOffice($filter: ModelSubscriptionOfficeFilterInput) {
  onCreateOffice(filter: $filter) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOfficeSubscriptionVariables,
  APITypes.OnCreateOfficeSubscription
>;
export const onUpdateOffice = /* GraphQL */ `subscription OnUpdateOffice($filter: ModelSubscriptionOfficeFilterInput) {
  onUpdateOffice(filter: $filter) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOfficeSubscriptionVariables,
  APITypes.OnUpdateOfficeSubscription
>;
export const onDeleteOffice = /* GraphQL */ `subscription OnDeleteOffice($filter: ModelSubscriptionOfficeFilterInput) {
  onDeleteOffice(filter: $filter) {
    id
    label
    commune
    center
    mougataa
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOfficeSubscriptionVariables,
  APITypes.OnDeleteOfficeSubscription
>;
