import { actionTypes } from "../constants/action-types";
import { BaseAction } from "../constants/static-types";

// -------------------------------------------------------------------------------------
// SelectedStar
// -------------------------------------------------------------------------------------
interface SetSelectedStarAction extends BaseAction {
  type: string;
  payload: { star_type: string };
}

interface ResetSelectedStarAction extends BaseAction {
  type: string;
}

export type SelectedStarAction =
  | SetSelectedStarAction
  | ResetSelectedStarAction;

export function setSelectedStar(star_type: string): SetSelectedStarAction {
  return {
    type: actionTypes.SET_SELECTED_STAR,
    payload: { star_type }
  };
}

export function resetSelectedStar(star_type = ""): ResetSelectedStarAction {
  return {
    type: actionTypes.RESET_SELECTED_STAR,
    payload: { star_type }
  };
}

// -------------------------------------------------------------------------------------
// IsDestroyIgnited
// -------------------------------------------------------------------------------------
interface IgniteDestroyPlanetsAction extends BaseAction {
  type: string;
  payload: { status: boolean };
}

// TODO: 命名気持ち悪いかな
interface ResetDestroyActionAction extends BaseAction {
  type: string;
  payload: { status: string };
}

export type IsDestroyIgnitedAction =
  | IgniteDestroyPlanetsAction
  | ResetDestroyActionAction;

export function setDestroyAction(status: any): IgniteDestroyPlanetsAction {
  return {
    type: actionTypes.SET_DESTROY_ACTION,
    payload: { status }
  };
}

export function resetDestroyAction(): ResetDestroyActionAction {
  return {
    type: actionTypes.RESET_DESTROY_ACTION,
    payload: { status }
  };
}

// -------------------------------------------------------------------------------------
// ModalOpen
// -------------------------------------------------------------------------------------
interface SetModalStatusAction extends BaseAction {
  type: string;
  payload: { status: boolean };
}

interface ResetModalStatusAction extends BaseAction {
  type: string;
  payload: { status: boolean };
}

export type ModalOpenAction = SetModalStatusAction | ResetModalStatusAction;

export function setModalStatus(status = true): SetModalStatusAction {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: { status }
  };
}

export function resetModalStatus(status = false): ResetModalStatusAction {
  return {
    type: actionTypes.CLOSE_MODAL,
    payload: { status }
  };
}
