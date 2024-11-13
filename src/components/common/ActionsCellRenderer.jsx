import { useCallback, useState } from "react";
import deleteIcon from "../../assets/images/delete.svg";
import { useTranslation } from "react-i18next";
import AppStrings from "../../utils/appStrings";
import DialogModel from "../common/DialogModel";
import { Button } from "@mui/material";

export const ActionsCellRenderer = ({ api, node, setSelectedRowData }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const onRemoveClick = useCallback(() => {
    setOpen(true);
    setSelectedRowData(null);
  }, [node, api]);

  const onEditClick = () => {
    const rowData = node.data;
    setSelectedRowData(rowData);

  }

  return (
    <>
      <div className="buttonCell">
        <button
          className="button-secondary editButton"
          onClick={onEditClick}
        >
          {t(AppStrings.edit)}
        </button>
        <button
          className="button-secondary removeButton"
          onClick={onRemoveClick}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
      <DialogModel open={open} handleClose={() => setOpen(false)} title={
        <div className="d-flex align-items-center gap-2">
          <img src={deleteIcon} alt="delete" />
          {t(AppStrings.delete)}  </div>
      } text={t(AppStrings.deleteConfirmation)}>
        <div className="d-flex justify-content-end gap-2 w-100">
          <Button variant="outlined" color="error" sx={{ padding: '3px 20px', '&:hover': { backgroundColor: 'var(--secondary-color)', color: 'white' } }} onClick={() => setOpen(false)}>{t(AppStrings.confirm)}</Button>
          <Button variant="text" color="primary" onClick={() => setOpen(false)}>{t(AppStrings.cancel)}</Button>
        </div>
      </DialogModel>
    </>
  );
};
