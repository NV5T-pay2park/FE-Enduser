import { Garage } from '@mui/icons-material';
import React, { useState } from 'react';
import '../../../components/ComboBox/index';
import ComboBox from '../../../components/ComboBox/index';
import ListCard from '../../../components/ListCard/index';
// import '../../../models/Garage';

const Search = () => {

  const DataGarage = [
    {
      id: '1',
      name: 'Nhà xe Hữu Trưởng',
      status: 'available',
      capacity: 60,
      address: '280 Lê Hồng Phong, phường 7, quận 5',
      phone: '0274114118',
    },
    {
      id: '2',
      name: 'Nhà xe Tiến Thành',
      status: 'available',
      capacity: 60,
      address: '30 Lý Chính Thắng, phường 2, quận 3',
      phone: '0274114118',
    },
    {
      id: '3',
      name: 'Nhà xe Huế Như',
      status: 'available',
      capacity: 60,
      address: '11 Nguyễn Văn Linh, phường Bình Phương, quận 7',
      phone: '0274114118',
    },
    {
      id: '4',
      name: 'Nhà xe Thiện Toàn',
      status: 'available',
      capacity: 60,
      address: '69 Phạm Văn Đồng, phường Linh Trung, quận Thủ Đức',
      phone: '0274114118',
    },
    {
      id: '5',
      name: 'Nhà xe Trung Trực',
      status: 'available',
      capacity: 60,
      address: '33 Nguyễn Văn Cừ, phường 1, quận 5',
      phone: '0274114118',
    },
    {
      id: '6',
      name: 'Nhà xe Xuân Vũ',
      status: 'available',
      capacity: 60,
      address: '82 Nguyễn Thị Minh Khai, phường 2, quận 1',
      phone: '0274114118',
    },
  ];

  const [DisplayDataGarage, setDataGarage] = useState(DataGarage);

  const handleChoose = (str) => {
    if (str === '') {
      setDataGarage(DataGarage);
      return;
    }
    var tempData = [...DataGarage]
    var idx = -1;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].name === str) {
        idx = i;
        break;
      }
    }
    if (idx == -1) {
      setDataGarage([]);
      return;
    }
    tempData = [tempData[idx]];
    setDataGarage(tempData);
  }

  return (
    <div>
      <ComboBox listName={DataGarage} handleChoose={handleChoose} />
      <ListCard list={DisplayDataGarage} />
    </div>
  )
}

export default Search