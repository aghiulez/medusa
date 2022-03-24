import {
  AdminPriceListRes,
  AdminPostPriceListsPriceListPriceListReq,
  AdminPostPriceListsPriceListReq,
  AdminPostPriceListPricesPricesReq,
  AdminDeletePriceListPricesPricesReq,
} from "@medusajs/medusa"
import { Response } from "@medusajs/medusa-js"
import { useMutation, UseMutationOptions, useQueryClient } from "react-query"
import { AdminPriceListDeleteRes } from "../../../../../medusa-js/node_modules/@medusajs/medusa/dist"
import { useMedusa } from "../../../contexts/medusa"
import { buildOptions } from "../../utils/buildOptions"
import { adminPriceListKeys } from "./queries"

export const useAdminCreatePriceList = (
  options?: UseMutationOptions<
    Response<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListReq
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: AdminPostPriceListsPriceListReq) =>
      client.admin.priceLists.create(payload),
    buildOptions(queryClient, adminPriceListKeys.lists(), options)
  )
}

export const useAdminUpdatePriceList = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListPriceListReq
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    (payload: AdminPostPriceListsPriceListPriceListReq) =>
      client.admin.priceLists.update(id, payload),
    buildOptions(
      queryClient,
      [adminPriceListKeys.detail(id), adminPriceListKeys.lists()],
      options
    )
  )
}

export const useAdminDeletePriceList = (
  id: string,
  options?: UseMutationOptions<Response<AdminPriceListDeleteRes>, Error, void>
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    () => client.admin.priceLists.delete(id),
    buildOptions(
      queryClient,
      [adminPriceListKeys.detail(id), adminPriceListKeys.lists()],
      options
    )
  )
}

export const useAdminCreateBatchPriceList = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPriceListRes>,
    Error,
    AdminPostPriceListPricesPricesReq
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: AdminPostPriceListPricesPricesReq) =>
      client.admin.priceLists.batchAddPrices(id, payload),
    buildOptions(queryClient, adminPriceListKeys.lists(), options)
  )
}

export const useAdminDeleteBatchPriceList = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPriceListDeleteRes>,
    Error,
    AdminDeletePriceListPricesPricesReq
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    (payload: AdminPostPriceListPricesPricesReq) =>
      client.admin.priceLists.batchDeletePrices(id, payload),
    buildOptions(
      queryClient,
      [adminPriceListKeys.detail(id), adminPriceListKeys.lists()],
      options
    )
  )
}
