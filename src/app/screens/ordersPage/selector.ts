import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrderPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
  selectOrderPage,
  (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
  selectOrderPage,
  (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrderPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
