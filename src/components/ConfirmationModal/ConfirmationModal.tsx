import { FC } from "react";
import { ConfirmationModalProps } from "./ConfirmationModal.types";

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-70">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-white bg-red-500 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 ml-4 text-gray-700 bg-gray-300 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
