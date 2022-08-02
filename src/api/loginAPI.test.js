import * as LoginAPI from './loginAPI'
import * as Constant from '../config/config'

const mockLoginResponse = {
    "status": "OK",
    "message": "Success",
    "data": {
        "zalopayID": "93jfkd092f2fs4",
        "endUserID": 31
    }
}

describe('test login api', () => {
    test('test login succesfully', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockLoginResponse),
                })
        )
      // highlight-end

      const loginResponse = await LoginAPI.requestLogin("93jfkd09f2fs4", "toan", "nguyen")
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + "/api/loginenduser?zlpId=93jfkd09f2fs4&firstName=toan&lastName=nguyen"
      )
      expect(loginResponse).toBe(mockLoginResponse.data)
    })

    test('test login fail', async () => {
      // highlight-start
      const tempUser = {
        "userID": 5,
      }
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve(mockLoginResponse),
                })
        )
      // highlight-end

      const loginResponse = await LoginAPI.requestLogin("93jfkd09f2fs4", "toan", "nguyen")
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + "/api/loginenduser?zlpId=93jfkd09f2fs4&firstName=toan&lastName=nguyen"
      )
      expect(loginResponse).toEqual(tempUser)
    })
})