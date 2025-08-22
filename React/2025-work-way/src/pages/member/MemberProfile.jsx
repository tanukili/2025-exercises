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
      <div className="p-6 bg-white rounded-4 shadow">
        <div className="row">
          <h2 className="mb-4 fw-medium fs-5">個人資料</h2>
          <div className="mb-12">
            <div className="d-flex align-items-end mb-4">
              <img
                className="rounded-circle"
                src="/avatar.png"
                alt="會員頭像"
              />
              <button
                className="btn btn-outline-primary ms-4 d-inline-flex align-items-center fs-8 p-3"
                type="button"
              >
                <span className="material-symbols-outlined fs-5">upload</span>
                更新頭貼
              </button>
            </div>
            <form className="was-validated">
              <div className="form-floating mb-4">
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
              <div className="mb-4">
                <p className="mb-2 lh-base fs-8">性別</p>
                <div className="d-flex">
                  <div className="form-check lh-1 d-flex align-items-center mb-0 mx-2">
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
                  <div className="form-check lh-1 d-flex align-items-center mb-0 mx-2">
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
                  <div className="form-check lh-1 d-flex align-items-center mb-0 mx-2">
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
              <div className="form-floating mb-4">
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
                <p className="mb-2 lh-base fs-8">密碼</p>
                <button
                  type="button"
                  className="btn btn-outline-primary d-inline-flex align-items-center fs-8 p-3"
                  data-bs-toggle="modal"
                  data-bs-target="#passwordModal"
                >
                  修改密碼
                  <span className="material-symbols-outlined fs-5">
                    keyboard_arrow_right
                  </span>
                </button>
              </div>
              <div className="form-floating mb-4">
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
                <p className="text-natural-50 lh-base fs-8 px-2">
                  盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
                </p>
                <div className="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的姓名
                  </div>
                </div>
              </div>
              <div className="form-floating mb-4">
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
          <div className="d-flex flex-column flex-md-row">
            <button
              type="submit"
              className="btn btn-primary d-inline-flex justify-content-center fs-8 mb-4"
            >
              儲存更新
              <span className="material-symbols-outlined fs-5">
                keyboard_arrow_right
              </span>
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary d-inline-flex justify-content-center fs-8"
            >
              重新填寫
              <span className="material-symbols-outlined fs-5">
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
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                更新密碼
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入您的新密碼"
                  value={memberInfo.password}
                  onChange={handleInputChange}
                />

                <label htmlFor="password">新密碼</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="reconfirmPassword"
                  placeholder="請再次輸入您的新密碼"
                  value={reconfirmPassword}
                  onChange={handleInputChange}
                />

                <label htmlFor="reconfirmPassword">再次密碼</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary d-inline-flex"
                data-bs-dismiss="modal"
              >
                更新密碼
                <span class="material-symbols-outlined">
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
