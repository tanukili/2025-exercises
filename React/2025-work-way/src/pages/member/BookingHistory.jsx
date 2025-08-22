export default function BookingHistory() {
  return (
    <div className="col-md-10 bg-white rounded-4 shadow">
      <div className="py-4 px-3">
        <h2 className="mb-3">預約紀錄</h2>
        <div className="row">
          <div className="col d-none d-md-block">
            <div className="border rounded-4 text-center py-4">
              <p className="mb-2">3</p>
              <h3>已完成諮詢</h3>
            </div>
          </div>
          <div className="col">
            <div className="border rounded-4 text-center py-4">
              <p className="mb-2">2025/10/10</p>
              <h3>即將到來</h3>
            </div>
          </div>
          <div className="col  d-none d-md-block">
            <div className="border rounded-4 text-center py-4">
              <p className="mb-2">3/6</p>
              <h3>使用方案進度</h3>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <ul className="nav nav-pills mb-3">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center active"
                href="#"
                aria-current="page"
              >
                全部預約
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link d-flex align-items-center" href="#">
                已完成
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                已取消
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-primary" type="button">
            <span className="d-none d-md-flex">排序</span>
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">諮詢方案</th>
              <th scope="col">預約日期</th>
              <th scope="col">諮詢時長</th>
              <th scope="col">諮詢方式</th>
              <th scope="col">上課狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 6/6堂</th>
              <td>2025/11/11</td>
              <td>60分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">視訊</span>
              </td>
              <td>等待上課</td>
            </tr>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 5/6堂</th>
              <td>2025/10/10</td>
              <td>60分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">視訊</span>
              </td>
              <td>等待上課</td>
            </tr>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 4/6堂</th>
              <td>2025/09/09</td>
              <td>60分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">視訊</span>
              </td>
              <td>已完成</td>
            </tr>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 3/6堂</th>
              <td>2025/08/08</td>
              <td>60分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">
                  面對面
                </span>
              </td>
              <td>已完成</td>
            </tr>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 2/6堂</th>
              <td>2025/07/07</td>
              <td>60分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">
                  面對面
                </span>
              </td>
              <td>已完成</td>
            </tr>
            <tr>
              <th scope="row">職涯定位-職涯探索包 | 1/6堂</th>
              <td>2025/06/06</td>
              <td>90分鐘</td>
              <td>
                <span className="badge rounded-pill text-bg-primary">
                  面對面
                </span>
              </td>
              <td>已完成</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
