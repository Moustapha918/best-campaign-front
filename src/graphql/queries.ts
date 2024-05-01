/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMilitant = /* GraphQL */ `query GetMilitant($id: ID!) {
  getMilitant(id: $id) {
    id
    name
    nni
    email
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
` as GeneratedQuery<
  APITypes.GetMilitantQueryVariables,
  APITypes.GetMilitantQuery
>;
export const listMilitants = /* GraphQL */ `query ListMilitants(
  $id: ID
  $filter: ModelMilitantFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMilitants(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      nni
      email
      phone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMilitantsQueryVariables,
  APITypes.ListMilitantsQuery
>;
export const getPartisan = /* GraphQL */ `query GetPartisan($id: ID!) {
  getPartisan(id: $id) {
    id
    first_name
    last_name
    nni
    place_of_birth
    number_in_office
    genre
    militant {
      id
      name
      nni
      email
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
    partisanOfficeId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPartisanQueryVariables,
  APITypes.GetPartisanQuery
>;
export const listPartisans = /* GraphQL */ `query ListPartisans(
  $id: ID
  $filter: ModelPartisanFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPartisans(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      first_name
      last_name
      nni
      place_of_birth
      number_in_office
      genre
      createdAt
      updatedAt
      militantPartisansId
      partisanOfficeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartisansQueryVariables,
  APITypes.ListPartisansQuery
>;
export const getOffice = /* GraphQL */ `query GetOffice($id: ID!) {
  getOffice(id: $id) {
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
` as GeneratedQuery<APITypes.GetOfficeQueryVariables, APITypes.GetOfficeQuery>;
export const listOffices = /* GraphQL */ `query ListOffices(
  $id: ID
  $filter: ModelOfficeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOffices(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      label
      commune
      center
      mougataa
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOfficesQueryVariables,
  APITypes.ListOfficesQuery
>;
