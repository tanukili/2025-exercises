import { useState } from "react";

export default function MemberProfile() {
  const [memberInfo, setMemberInfo] = useState({
    name: "Mokumaru",
    email: "mokumaru@mail.com",
    birthday: "2000/01/10",
    gender: "female",
    phone: "09-1234-5678",
    address: "高雄市三民區九如一路 87 號",
    password: "",
  });

  let reconfirmPassword = "";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMemberInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="col-md-10">
      <div className="p-6 bg-white rounded-4 shadow p-md-9">
        <div className="row gx-1">
          <div className="col-md">
            <h2 className="mb-4 fw-medium fs-5 fs-md-4">個人資料</h2>
          </div>
          <div className="col-md-8 mb-12 mb-md-9">
            <div className="d-flex align-items-end mb-4 mb-md-6">
              <img
                className="rounded-circle"
                src="/avatar.png"
                alt="會員頭像"
              />
              <button
                className="btn btn-outline-primary ms-4 d-inline-flex align-items-center fs-8 p-3 fs-md-7 px-md-5"
                type="button"
              >
                <span className="material-symbols-outlined fs-5 me-md-1">
                  upload
                </span>
                更新頭貼
              </button>
            </div>
            <form className="was-validated">
              <div className="form-floating mb-4 mb-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="請輸入您的姓名"
                  value={memberInfo.name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name">姓名</label>
                <div className="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的姓名
                  </div>
                </div>
              </div>
              <div className="mb-4 mb-md-6">
                <p className="mb-2 fs-8 fs-md-7">性別</p>
                <div className="d-flex">
                  <div className="form-check d-flex align-items-center mb-0 mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleInputChange}
                      checked={memberInfo.gender === "female"}
                    />
                    <label className="form-check-label ms-1" htmlFor="female">
                      女性
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center mb-0 mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleInputChange}
                      checked={memberInfo.gender === "male"}
                    />
                    <label className="form-check-label ms-1" htmlFor="male">
                      男性
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center mb-0 mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="undisclosed"
                      value="undisclosed"
                      onChange={handleInputChange}
                      checked={memberInfo.gender === "undisclosed"}
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor="undisclosed"
                    >
                      不願透露
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-4 mb-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="birthday"
                  placeholder="請輸入您的生日"
                  value={memberInfo.birthday}
                  onChange={handleInputChange}
                />

                <label htmlFor="birthday">生日</label>
              </div>
              <div className="mb-4">
                <p className="mb-2 fs-8 fs-md-7">密碼</p>
                <button
                  type="button"
                  className="btn btn-outline-primary d-inline-flex align-items-center fs-8 p-3 fs-md-7 ps-md-5"
                  data-bs-toggle="modal"
                  data-bs-target="#passwordModal"
                >
                  修改密碼
                  <span className="material-symbols-outlined fs-5 ms-md-1">
                    keyboard_arrow_right
                  </span>
                </button>
              </div>
              <div className="form-floating mb-4 mb-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="請輸入您的信箱"
                  value={memberInfo.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email">信箱</label>
                <p className="text-natural-50 fs-8 px-2">
                  盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
                </p>
                <div className="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的信箱
                  </div>
                </div>
              </div>
              <div className="form-floating mb-4 mb-md-6">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="請輸入您的聯絡電話"
                  value={memberInfo.phone}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="phone">聯絡電話</label>
                <div className="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的聯絡電話
                  </div>
                </div>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="請輸入您的通訊地址"
                  value={memberInfo.address}
                  onChange={handleInputChange}
                />

                <label htmlFor="address">通訊地址</label>
              </div>
            </form>
          </div>
          <div className="d-flex flex-column flex-md-row-reverse justify-content-center gap-6">
            <button
              type="submit"
              className="btn btn-primary d-inline-flex justify-content-center align-items-center fs-8 fs-md-7 ps-md-5"
            >
              儲存更新
              <span className="material-symbols-outlined fs-5 ms-md-1">
                keyboard_arrow_right
              </span>
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center fs-8 fs-md-7 pe-md-5"
            >
              重新填寫
              <span className="material-symbols-outlined fs-5 ms-md-1">
                keyboard_arrow_right
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="passwordModal"
        tabIndex="-1"
        aria-labelledby="passwordModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-medium">更新密碼</h1>
              <button
                type="button"
                className="btn btn-outline-primary border-0 p-13 ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-symbols-outlined d-block">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="請輸入您的新密碼"
                  value={memberInfo.password}
                  onChange={handleInputChange}
                />

                <label htmlFor="password">新密碼</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="reconfirmPassword"
                  placeholder="請再次輸入您的新密碼"
                  value={reconfirmPassword}
                  onChange={handleInputChange}
                />

                <label htmlFor="reconfirmPassword">再次密碼</label>
              </div>
            </div>
            <div className="modal-footer py-3">
              <button
                type="button"
                className="btn btn-primary d-inline-flex align-items-center pe-3 rounded-4"
                data-bs-dismiss="modal"
              >
                更新密碼
                <span className="material-symbols-outlined fs-5 ms-1">
                  keyboard_arrow_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
