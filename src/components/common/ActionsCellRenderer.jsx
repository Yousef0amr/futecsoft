import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import AppStrings from "../../utils/appStrings";
import { DeleteOutline } from "@mui/icons-material";

const ActionsCellRenderer = ({ node, handleOnEditClick, handleDeleteClick }) => {
  const { t } = useTranslation();



  const onRemoveClick = useCallback(() => {
    handleDeleteClick(node.data);
  }, [node, handleDeleteClick]);


  const onEditClick = useCallback(() => {
    const rowData = node.data;
    handleOnEditClick({ ...rowData, index: node.rowIndex });
    node.setSelected(true, true);
  }, [node, handleOnEditClick]);

  return (
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
        <DeleteOutline />
      </button>
    </div>
  );
};

export default ActionsCellRenderer;
