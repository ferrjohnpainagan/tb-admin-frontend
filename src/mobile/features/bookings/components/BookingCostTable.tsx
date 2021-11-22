import React from "react";

import DeleteIcon from "../../../../img/delete-icon.svg";
import InfoIcon from "../../../../img/info-icon.svg";
import TextLabel from "../../../../shared/TextLabel";

interface PackageDetailsProps {
  /** Type of table to be rendered */
  type: string;
  /** Items list object */
  itemsList?: any;
  /** Function for removing package detail item */
  handleRemoveItem?: any;
}
interface IItemInput {
  itemName: string;
  itemCost: string;
  addedBy: string;
}

const BookingCostTable: React.FC<PackageDetailsProps> = ({
  type,
  itemsList,
  handleRemoveItem,
}) => {
  const calcTotalCost = (items: any) => {
    let total = 0;

    items.map((item: any) => {
      total += parseFloat(item?.itemCost);
    });

    return total;
  };

  return (
    <>
      {/* Render this table for form type */}
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
            {itemsList?.map((item: IItemInput, index: any) => {
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

      {/* Render this table for card typ */}

      {type === "card" ? (
        <>
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
              {itemsList?.map((item: IItemInput, index: any) => {
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
                    <td onClick={() => console.log(itemsList[index])}>
                      <img src={InfoIcon} alt="del" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex flex-col items-end mt-2">
            <TextLabel text={"Items Cost"} />
            <div className="font-poppins text-xl text-purple3 font-medium">
              Php {calcTotalCost(itemsList ? itemsList : [])}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BookingCostTable;
