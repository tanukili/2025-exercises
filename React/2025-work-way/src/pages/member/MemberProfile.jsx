export default function MemberProfile() {
  const memberInfo = {
    name: "Mokumaru",
    email: "mokumaru@mail.com",
    birthday: "2000/01/10",
    gender: "female",
    phone: "09-1234-5678",
    address: "高雄市三民區九如一路 87 號",
    password: "",
  };

  let reconfirmPassword = "";

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
                <span class="material-symbols-outlined fs-5">upload</span>
                更新頭貼
              </button>
            </div>
            <form className="was-validated">
              <div class="form-floating mb-4">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="請輸入您的姓名"
                  value={memberInfo.name}
                  required
                />
                <label for="name">姓名</label>
                <div class="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span class="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的姓名
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 fs-8">性別</p>
                <div className="d-flex">
                  <div class="form-check mx-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={memberInfo.gender === "female"}
                    />
                    <label class="form-check-label" for="female">
                      女性
                    </label>
                  </div>
                  <div class="form-check mx-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={memberInfo.gender === "male"}
                    />
                    <label class="form-check-label" for="male">
                      男性
                    </label>
                  </div>
                  <div class="form-check mx-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="undisclosed"
                      value="undisclosed"
                      checked={memberInfo.gender === "undisclosed"}
                    />
                    <label class="form-check-label" for="undisclosed">
                      不願透露
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="birthday"
                  placeholder="請輸入您的生日"
                  value={memberInfo.birthday}
                />
                <label for="birthday">生日</label>
              </div>
              <div className="mb-4">
                <p className="mb-2 fs-8">密碼</p>
                <button
                  type="button"
                  class="btn btn-outline-primary d-inline-flex align-items-center fs-8 p-3"
                  data-bs-toggle="modal"
                  data-bs-target="#passwordModal"
                >
                  修改密碼
                  <span class="material-symbols-outlined fs-5">
                    keyboard_arrow_right
                  </span>
                </button>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="請輸入您的信箱"
                  value={memberInfo.email}
                  required
                />
                <label for="email">信箱</label>
                <p className="text-natural-50 fs-8 px-2">
                  盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
                </p>
                <div class="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span class="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的姓名
                  </div>
                </div>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="請輸入您的聯絡電話"
                  value={memberInfo.phone}
                  required
                />
                <label for="phone">聯絡電話</label>
                <div class="invalid-feedback">
                  <div className="d-flex align-items-center">
                    <span class="material-symbols-outlined me-1 fs-9">
                      error
                    </span>
                    請輸入您的聯絡電話
                  </div>
                </div>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="adress"
                  placeholder="請輸入您的通訊地址"
                  value={memberInfo.address}
                />
                <label for="adress">通訊地址</label>
              </div>
            </form>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <button
              type="submit"
              className="btn btn-primary d-inline-flex justify-content-center fs-8 mb-4"
            >
              儲存更新
              <span class="material-symbols-outlined fs-5">
                keyboard_arrow_right
              </span>
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary d-inline-flex justify-content-center fs-8"
            >
              重新填寫
              <span class="material-symbols-outlined fs-5">
                keyboard_arrow_right
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        class="modal fade"
        id="passwordModal"
        tabindex="-1"
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
                />
                <label for="password">新密碼</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="reconfirmPassword"
                  placeholder="請再次輸入您的新密碼"
                  value={reconfirmPassword}
                />
                <label for="reconfirmPassword">再次密碼</label>
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
