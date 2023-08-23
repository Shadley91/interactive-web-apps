import { createOrderData, updateDragging, state } from "./data.js";
import {
  html,
  createOrderHtml,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {};
const handleDragEnd = (event) => {
  const eventId = event.target.dataset.id;
  const stage = state.dragging.over;
  moveToColumn(eventId, stage);
};

const handleHelpToggleClose = (event) => {
  const helpHandleClose = html.help.overlay;
  helpHandleClose.style.display = "none";
};
const handleHelpToggleOpen = (event) => {
  const helpHandleOpen = html.help.overlay;
  helpHandleOpen.style.display = "block";
};
const handleAddToggleOpen = (event) => {
  const openAddOrder = html.add.overlay;
  openAddOrder.style.display = "block";
};

const handleAddToggleClose = (event) => {
  const closeAddOrder = html.add.overlay;
  closeAddOrder.style.display = "none";
};
const handleAddSubmit = (event) => {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd);
  const formData = createOrderData(data);
  event.target.reset();

  const elementHTML = createOrderHtml(formData);
  const ordered = document.querySelector(".grid .grid__content");

  ordered.appendChild(elementHTML);
  handleAddToggleClose(event);
};
const handleEditToggleOpen = (event) => {
  console.log(event.target);
  const eventId = event.target.dataset.id;
  const openHandleEdit = html.edit.overlay;
  openHandleEdit.style.display = "block";
};
const handleEditToggleClosed = (event) => {
  const closeEditHandle = html.edit.overlay;
  closeEditHandle.style.display = "none";
};
const handleEditSubmit = (event) => {
  event.preventDefault();
  const editDelete = document.querySelector(".grid__content");
  const orderDelete = document.querySelector(".grid__content .order");
  editDelete.removeChild(orderDelete);

  const editData = new FormData(event.target);
  const data = Object.fromEntries(editData);
  const formDataEdit = createOrderData(data);

  const orderEdit = createOrderHtml(formDataEdit);
  const editedOrder = document.querySelector(".grid__content");
  editedOrder.appendChild(orderEdit);

  const eventId = formDataEdit.id;
  const stage = formDataEdit.column;
  console.log(eventId);
  console.log(stage);
  moveToColumn(eventId, stage);

  event.target.reset();
};
const handleDelete = (event) => {
  const editDelete = document.querySelector(".grid__content");
  const orderDelete = document.querySelector(".grid__content .order");
  editDelete.removeChild(orderDelete);
  handleEditToggleClosed(event);
};

html.add.cancel.addEventListener("click", handleAddToggleClose);
html.other.add.addEventListener("click", handleAddToggleOpen);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggleOpen);
html.edit.cancel.addEventListener("click", handleEditToggleClosed);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggleClose);
html.other.help.addEventListener("click", handleHelpToggleOpen);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
