import React from "react";

import DeleteIcon from "../../../../img/delete-icon.svg";

interface PackageDetailsProps {
  /** Type of table to be rendered */
  type: string;
  /** Package details object */
  packageDetails?: any;
  /** Function for removing package detail item */
  handleRemoveItem?: any;
}
interface IItemInput {
  itemName: string;
  itemCost: string;
  addedBy: string;
}

const PackageDetailsTable: React.FC<PackageDetailsProps> = ({
  type,
  packageDetails,
  handleRemoveItem,
}) => {
  return (
    <>
      {type === "form" ? (
        <table className="w-full mt-2 table-fixed">
          <colgroup>
            <col width="185px"></col>
            <col width="92px"></col>
            <col width="30px"></col>
          </colgroup>
          <thead>
            <tr className="border-b border-defaultBlack">
              <th className="font-poppins text-xs text-opacity-60 text-defaultBlack font-normal text-left">
                Item Name
              </th>
              <th className="font-poppins text-xs text-opacity-60 text-defaultBlack font-normal text-left">
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {packageDetails.map((item: IItemInput, index: any) => {
              return (
                <tr key={index} className="border-b border-defaultBlack">
                  <td>
                    <div className="font-poppins text-m text-defaultBlack font-normal truncate w-36">
                      {item.itemName}
                    </div>
                  </td>
                  <td>
                    <div className="font-poppins text-m text-defaultBlack font-normal truncate w-20">
                      {item.itemCost}
                    </div>
                  </td>
                  <td onClick={() => handleRemoveItem(index)}>
                    <img src={DeleteIcon} alt="del" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default PackageDetailsTable;
