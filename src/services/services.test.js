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
  