import React from 'react'
import '../../../components/ComboBox/index';
import ComboBox from '../../../components/ComboBox/index';

const Search = () => {
  const listName = [
    {
      title: "nhà xe Trung Trực",
    },
    {
      title: "nhà xe Hữu Trưởng",
    },
    {
      title: "nhà xe Huê Như",
    },
    {
      title: "nhà xe Thiện Toàn",
    },
    {
      title: "nhà xe Xuân Vũ",
    },
  ]
  return (
    <div>
      <ComboBox listName={listName} />
    </div>
  )
}

export default Search