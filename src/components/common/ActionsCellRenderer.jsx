import { useCallback } from "react";
import deleteIcon from "../../assets/images/delete.svg";
import { useTranslation } from "react-i18next";
import AppStrings from "../../utils/appStrings";


const ActionsCellRenderer = ({ node, handleOnEditClick, handleDeleteClick }) => {
  const { t } = useTranslation();

  const onRemoveClick = useCallback(() => {
    handleDeleteClick(node.data);
  }, [node, handleDeleteClick]);

  const onEditClick = useCallback(() => {
    const rowData = node.data;
    handleOnEditClick(rowData);
  }, [node, handleOnEditClick]);

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
    </>
  );
};


export default ActionsCellRenderer
