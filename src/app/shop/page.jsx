import ProductBox from "@/components/home/ProductBox.component";
import SideFilter from "@/components/shared/SideFilter/SideFilter.component";
import SortItem from "@/components/shared/SortItem/SortItem.component";

import {
  SIDE_FILTERS_MAP,
  SORT_FILTERS_MAP,
} from "@/constant/filters.constant";

function page() {
  return (
    <div className="px-40 pt-5">
      <SortItem sortList={SORT_FILTERS_MAP} />
      <div className="flex justify-between items-start">
        <SideFilter filters={SIDE_FILTERS_MAP} title={"دسته بندی فروشگاه"} />
        <div>
          <ProductBox />
        </div>
      </div>
    </div>
  );
}

export default page;
