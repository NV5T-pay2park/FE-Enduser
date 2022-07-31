import * as Service from './index'

// describe('Test formatMoney function', () => {
//     it('should format money', () => {
//       expect(formatMoney(20000)).toEqual('20.000 ₫');
//     });
  
//     it('should format money', () => {
//       expect(formatMoney(0)).toEqual('0 ₫');
//     });
  
//     it('should format money', () => {
//       expect(formatMoney(9999)).toEqual('9.999 ₫');
//     });
// });

describe('Test check null array', () => {
    it('should return array', () => {
      const mockData = [1,2,3]
      const checkedArray = Service.getCheckedNullList(mockData)
      expect(Array.isArray(checkedArray)).toEqual(true)
      expect(checkedArray.length).toEqual(3)
    });

    it('should return empty array', () => {
        const mockData = "hihi"
        const checkedArray = Service.getCheckedNullList(mockData)
        expect(Array.isArray(checkedArray)).toEqual(true)
        expect(checkedArray.length).toEqual(0)
    });

    it('should return empty array', () => {
        const mockData = undefined
        const checkedArray = Service.getCheckedNullList(mockData)
        expect(Array.isArray(checkedArray)).toEqual(true)
        expect(checkedArray.length).toEqual(0)
    });

    it('should return array', () => {
        const mockData = [{name: "toan"}, {name: "nhu"}, {name: "tan"}]
        const checkedArray = Service.getCheckedNullList(mockData)
        expect(Array.isArray(checkedArray)).toEqual(true)
        expect(checkedArray.length).toEqual(3)
        expect(checkedArray[2].name).toBe("tan")
    });

    it('should return array', () => {
      const mockData = []
      const checkedArray = Service.getCheckedNullList(mockData)
      expect(Array.isArray(checkedArray)).toEqual(true)
      expect(checkedArray.length).toEqual(0)
  });
    
});

describe('Test formatMoney function', () => {
    it('should format money', () => {
      expect(Service.formatMoney(20000)).toEqual('20.000 ₫');
    });
  
    it('should format money', () => {
      expect(Service.formatMoney(0)).toEqual('0 ₫');
    });
  
    it('should format money', () => {
      expect(Service.formatMoney(9999)).toEqual('9.999 ₫');
    });
  });


// test ZaloPay info
let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe('Test get ZaloPay id', () => {
    it('should not found ZaloPay info', async () => {
        windowSpy.mockImplementation(() => ({
            ZaloPay: {
              isZaloPay: false
            }
          }));
        const zaloPayID = await Service.getZaloPayID()
        expect(zaloPayID).toBe('aptx4869');
    });
});

// test format datetime
describe('Test format datetime', () => {
  it('test return correct format', async () => {
      expect(Service.formatDateTime("29/07/2022 09:49:34")).toEqual("29/07/2022 09:49")
  });

  it('test return correct format', async () => {
    expect(Service.formatDateTime("29/07/2022 01:57:09")).toEqual("29/07/2022 01:57")
  });

  it('test return default when datetime is undefined', async () => {
    expect(Service.formatDateTime(undefined)).toEqual("18/07/2022 14:27")
  });

  it('test return default when datetime is null', async () => {
    expect(Service.formatDateTime(null)).toEqual("18/07/2022 14:27")
  });

  it('test return default when datetime is empty', async () => {
    expect(Service.formatDateTime("")).toEqual("18/07/2022 14:27")
  });

});
  
describe('Test check if Object Null', () => {
  it('test null object', async () => {
    expect(Service.checkIfObjectNull(null)).toEqual({});
  });
  it('test not null object', async() => {
    expect(Service.checkIfObjectNull({})).toEqual({});
  });
})

describe('Test check if Location null', () => {
  it('test object location null', async () => {
    const mockData = {
      lat: 0, 
      lng: 0,
    }
    expect(Service.checkIfLocationNull(null)).toEqual(mockData);
  });
  it('test object location not null', async () => {
    const mockData = {
      lat: 1,
      lng: 1,
    };
    expect(Service.checkIfLocationNull(mockData)).toEqual(mockData);
  });
})

describe("Test check if String null", () => {
  it('test string null', async () => {
    expect(Service.checkIfStringNull(null)).toEqual("");
  });
  it('test string not null', async () => {
    expect(Service.checkIfStringNull("test")).toEqual("test");
  });
})

describe("Test check if null data list parking", () => {
  it('test null data list', async () => {
    expect(Service.checkIfNullDataListParking(null)).toEqual({
      data: []
    });
  });
  it('test if data list not null', async () => {
    expect(Service.checkIfNullDataListParking({})).toEqual({});
  }); 
})

describe('test check if detail parking null', () => { 
    it('test if object null', async() => {
      const mockData = {
        parkingLotName: "",
        timeMoving: 0, 
        distance: 0, 
        street: "", 
        ward: "", 
        city: "",
        timeOpen: "",
        timeClose: "",
        phoneNumber: "",
        status: "",
        location: {
            lat: 0, 
            lng: 0,
        }
      }
      expect(Service.checkIfDetailParkingNull(null)).toEqual(mockData);
    });
    it('test if object not null', async () => {
      expect(Service.checkIfDetailParkingNull({})).toEqual({});
    })
 });

 describe("test mock zalopay", () => {
   test("mock zalopay null", async() => {
        expect(Service.ZaloPay(null).isZaloPay).toEqual(true);
   });
   test("mock zalopay not null", async() => {
     expect(Service.ZaloPay({})).toEqual({});
   })
 })
 