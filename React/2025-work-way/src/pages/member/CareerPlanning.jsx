import { useState } from "react";

export default function CareerPlanning() {
  //  模擬遠端資料
  const [planContent, setPlanContent] = useState({
    employmentStatus: "full_time_employee",
    industry: "",
    experience: "",
    monthlyIncomeRange: "under_30k",
    careerSummary: "",
    PortfolioLink: "",
    careerGoals: "",
    careerVision: "",
    IdealWorkingModel: "on_site_office",
    targetSalary: "",
    careerChallenges: [],
    supportResources: [],
    interestedServices: [],
    coreExpertise: [],
    professionalBackground: "",
    professionalSkills: "",
    languageProficiency: "",
    certificate: "",
    education: "",
    professionalTrainingWorkshops: "",
  });

  const handleInputChange = (event) => {
    const { type, name, value, checked } = event.target;

    // checkbox type 專用
    if (type === "checkbox") {
      setPlanContent((prev) => {
        const prevArr = Array.isArray(prev[name]) ? prev[name] : [];

        if (checked) {
          // 加入新 checkbox
          return prevArr.includes(value)
            ? prev
            : { ...prev, [name]: [...prevArr, value] };
        } else {
          // 移除已勾選 checkbox
          return prevArr.includes(value)
            ? { ...prev, [name]: prevArr.filter((v) => v !== value) }
            : prev;
        }
      });
      return;
    }
    setPlanContent((prev) => ({ ...prev, [name]: value }));
  };

  // 表單選項
  const employmentOptions = [
    { value: "full_time_employee", label: "全職上班族" },
    { value: "part_time_worker", label: "兼職工作者" },
    { value: "freelancer_contractor", label: "自由工作者／接案者" },
    { value: "digital_nomad", label: "數位遊牧者" },
    { value: "entrepreneur_business_owner", label: "創業者／企業主" },
    { value: "between_jobs", label: "待業中" },
    { value: "other", label: "其他" },
  ];

  const incomeOptions = [
    { value: "under_30k", label: "3 萬以下" },
    { value: "30k_50k", label: "3–5 萬" },
    { value: "50k_80k", label: "5–8 萬" },
    { value: "80k_120k", label: "8–12 萬" },
    { value: "120k_200k", label: "12–20 萬" },
    { value: "over_200k", label: "20 萬以上" },
  ];

  const industryOptions = [
    { value: "technology", label: "科技" },
    { value: "media", label: "媒體" },
    { value: "education", label: "教育" },
    { value: "finance", label: "金融" },
    { value: "healthcare", label: "醫療健康" },
    { value: "retail_manufacturing", label: "零售製造" },
    { value: "services", label: "服務業" },
    { value: "arts_creative", label: "藝術創意" },
    { value: "nonprofit", label: "非營利組織" },
  ];

  const experienceOptions = [
    { value: "under_1_year", label: "1 年以下" },
    { value: "1_to_3_years", label: "1–3 年" },
    { value: "3_to_5_years", label: "3–5 年" },
    { value: "5_to_10_years", label: "5–10 年" },
    { value: "over_10_years", label: "10 年以上" },
  ];

  const workModeOptions = [
    { value: "on_site_office", label: "固定辦公室工作" },
    { value: "hybrid_office_remote", label: "混合式工作（辦公室＋遠端）" },
    { value: "fully_remote_fixed_location", label: "完全遠端工作（固定地點）" },
    { value: "digital_nomad", label: "數位遊牧（邊工作邊旅行）" },
    { value: "other", label: "其他（請說明）" },
  ];

  const careerChallengeOptions = [
    { value: "unclear_direction", label: "方向不明確" },
    { value: "need_upskilling", label: "技能需要提升" },
    { value: "unstable_income", label: "收入不穩定" },
    {
      value: "client_acquisition_difficulty",
      label: "客戶開發困難",
    },
    { value: "time_management_issues", label: "時間管理問題" },
    { value: "work_life_imbalance", label: "工作生活失衡" },
    { value: "lack_of_network", label: "缺乏人脈資源" },
    { value: "other", label: "其他(請說明)" },
  ];

  const supportResourceOptions = [
    { value: "career_guidance", label: "職涯方向指導" },
    { value: "upskilling_advice", label: "專業技能提升建議" },
    { value: "personal_branding", label: "個人品牌建立" },
    {
      value: "freelancing_strategy_pricing",
      label: "接案策略與定價",
    },
    {
      value: "client_acquisition_methods",
      label: "客戶開發方法",
    },
    { value: "financial_planning", label: "財務規劃" },
    { value: "time_management_system", label: "時間管理系統" },
    { value: "work_life_balance", label: "工作生活平衡" },
    { value: "other", label: "其他(請說明)" },
  ];

  const serviceInterestOptions = [
    { value: "positioning_discovery", label: "探索定位" },
    { value: "custom_plan", label: "客製化方案" },
    { value: "practical_coaching", label: "實戰指導" },
  ];

  const coreExpertiseOptions = [
    { value: "design_creative", label: "設計/創意" },
    { value: "technology_software_development", label: "科技/程式開發" },
    { value: "marketing_public_relations", label: "行銷/公關" },
    { value: "content_creation_writing", label: "內容創作/寫作" },
    { value: "consulting_advisory", label: "顧問/諮詢" },
    { value: "business_management", label: "商業/管理" },
    { value: "finance_accounting", label: "財務/會計" },
    { value: "education_training", label: "教育/培訓" },
    { value: "legal_compliance", label: "法律/合規" },
    { value: "healthcare_medical", label: "健康/醫療" },
  ];

  // 表單元件
  const RadioGroup = (targetOptions, targetKey, isRequired = true) => {
    return targetOptions.map(({ value, label }) => {
      return (
        <div
          className="form-check d-flex align-items-center mb-2 mx-2"
          key={value}
        >
          <input
            className="form-check-input"
            type="radio"
            name={targetKey}
            id={`${targetKey}-${value}`}
            value={value}
            onChange={handleInputChange}
            checked={planContent[targetKey] === value}
            required={isRequired}
          />
          <label
            className="form-check-label ms-1"
            htmlFor={`${targetKey}-${value}`}
          >
            {label}
          </label>
        </div>
      );
    });
  };

  const CheckGroup = (targetOptions, targetKey, isRequired = true) => {
    const noneChecked = planContent[targetKey].length === 0;
    return targetOptions.map(({ value, label }) => {
      return (
        <div className="form-check d-flex align-items-center" key={value}>
          <input
            className="form-check-input"
            type="checkbox"
            name={targetKey}
            id={`${targetKey}-${value}`}
            value={value}
            onChange={handleInputChange}
            checked={planContent[targetKey].includes(value)}
            required={isRequired && noneChecked}
          />
          <label
            className="form-check-label ms-1"
            htmlFor={`${targetKey}-${value}`}
          >
            {label}
          </label>
        </div>
      );
    });
  };

  const SelectItem = ({ options, keyName, placeholder, isRequired = true }) => {
    const selectOptions = options.map(({ value, label }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ));

    return (
      <select
        className="form-select"
        id={keyName}
        name={keyName}
        value={planContent[keyName] ?? ""}
        onChange={handleInputChange}
        required={isRequired}
        aria-label={placeholder}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {selectOptions}
      </select>
    );
  };

  const TextareaItem = ({
    keyName,
    lablel = "",
    placeholder = "",
    maxLength = 300,
    isRequired = true,
  }) => {
    return (
      <div className="form-floating">
        <textarea
          className="form-control"
          name={keyName}
          placeholder={placeholder}
          id={keyName}
          style={{ height: "160px" }}
          maxLength={maxLength}
          required={isRequired}
        ></textarea>
        <label htmlFor={keyName}>{lablel}</label>
        <div className="invalid-feedback">
          <p className="d-flex align-items-center">
            <span className="material-symbols-outlined me-1 fs-9">error</span>
            {placeholder}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="col-md-10">
      <div className="p-6 bg-white rounded-4 shadow p-md-9">
        <form action="#" className="was-validated">
          <section
            className="row gx-1 border-bottom border-natural-85 pb-6 mb-6 pb-md-6 mb-md-9"
            aria-labelledby="career-plan-overview"
          >
            <div className="col-md d-flex align-items-center">
              <h2 className="fw-medium fs-5 fs-md-4 mb-md-3">職旅計劃概況</h2>
              <p className="ms-auto text-natural-50 fs-8">
                欄位皆為<span className="badge bg-danger ms-1">必填</span>
              </p>
            </div>
            <div className="col-md-8">
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">目前職業狀態</legend>
                <div className="form-check-group">
                  {RadioGroup(employmentOptions, "employmentStatus")}
                </div>
              </fieldset>
              <div className="mb-4 mb-md-6">
                {SelectItem({
                  options: industryOptions,
                  keyName: "industry",
                  placeholder: "工作產業",
                })}
              </div>
              <div className="mb-4 mb-md-6">
                {SelectItem({
                  options: experienceOptions,
                  keyName: "experience",
                  placeholder: "工作年資",
                })}
              </div>
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">月收入區間</legend>
                <div className="form-check-group">
                  {RadioGroup(incomeOptions, "monthlyIncomeRange")}
                </div>
              </fieldset>
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "careerSummary",
                  lablel:
                    "職業摘要（簡短描述您的專業背景和核心競爭力最多 300 字）",
                  placeholder: "請輸入您的職業摘要",
                })}
              </div>
              <div className="mb-4 mb-md-6">
                <div className="form-floating">
                  <input
                    type="url"
                    name="PortfolioLink"
                    className="form-control"
                    id="portfolio-link"
                    placeholder="請輸入您的作品展示連結"
                    value={planContent.PortfolioLink}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="portfolio-link">作品案例展示</label>
                  <div className="invalid-feedback">
                    <p className="d-flex align-items-center">
                      <span className="material-symbols-outlined me-1 fs-9">
                        error
                      </span>
                      請輸入您的作品展示連結
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2 fs-8 fs-md-7">附件檔案</p>
                <button
                  className="btn btn-outline-primary d-inline-flex align-items-center fs-8 p-3 fs-md-7 px-md-5"
                  type="button"
                >
                  <span className="material-symbols-outlined fs-5 me-md-1">
                    upload
                  </span>
                  上傳檔案
                </button>
              </div>
            </div>
          </section>
          <section
            className="row gx-1 border-bottom border-natural-85 pb-6 mb-6 pb-md-6 mb-md-9"
            aria-labelledby="career-planning"
          >
            <div className="col-md d-flex align-items-center">
              <h2 className="fw-medium fs-5 fs-md-4 mb-md-3">職涯規劃</h2>
              <p className="ms-auto text-natural-50 fs-8">
                欄位皆為<span className="badge bg-danger ms-1">必填</span>
              </p>
            </div>
            <div className="col-md-8">
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "careerGoals",
                  lablel: "1 年短期職涯目標（最多 300 字）",
                  placeholder: "請輸入您的短期職涯目標",
                })}
              </div>
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "careerVision",
                  lablel: "1-3 年中長期職涯願景（最多 300 字）",
                  placeholder: "請輸入您的中長期職涯願景",
                })}
              </div>
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">理想工作模式</legend>
                <div className="form-check-group">
                  {RadioGroup(workModeOptions, "IdealWorkingModel")}
                </div>
              </fieldset>
              <div className="mb-4 mb-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="targetSalary"
                    className="form-control"
                    id="target-salary"
                    placeholder="請輸入您的目標薪資"
                    required
                    value={planContent.targetSalary}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="target-salary">目標薪資/收入</label>
                  <div className="invalid-feedback">
                    <p className="d-flex align-items-center">
                      <span className="material-symbols-outlined me-1 fs-9">
                        error
                      </span>
                      請輸入您的目標薪資/收入
                    </p>
                  </div>
                </div>
              </div>
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">
                  目前面臨的職涯挑戰
                </legend>
                <div className="form-check-group">
                  {CheckGroup(careerChallengeOptions, "careerChallenges")}
                </div>
              </fieldset>
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">
                  期望獲得的協助與資源
                </legend>
                <div className="form-check-group">
                  {CheckGroup(supportResourceOptions, "supportResources")}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-2 fs-8 fs-md-7">感興趣的服務方案</legend>
                <div className="form-check-group">
                  {CheckGroup(serviceInterestOptions, "interestedServices")}
                </div>
              </fieldset>
            </div>
          </section>
          <section
            className="row gx-1 border-bottom border-natural-85 pb-6 mb-6 pb-md-6 mb-md-9"
            aria-labelledby="professional-skills"
          >
            <div className="col-md d-flex align-items-center">
              <h2 className="fw-medium fs-5 fs-md-4 mb-md-3">專業技能區塊</h2>
              <p className="ms-auto text-natural-50 fs-8">欄位皆為選填</p>
            </div>
            <div className="col-md-8">
              <fieldset className="mb-4 mb-md-6">
                <legend className="mb-2 fs-8 fs-md-7">核心專業領域</legend>
                <div className="form-check-group">
                  {CheckGroup(coreExpertiseOptions, "coreExpertise", false)}
                </div>
              </fieldset>
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "professionalBackground",
                  lablel: "專業背景和核心競爭力（最多300字）",
                  placeholder: "請描述您的專業背景和核心競爭力",
                  isRequired: false,
                })}
              </div>
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "professionalSkills",
                  lablel: "專業技能（最多300字）",
                  placeholder: "請描述您的專業技能",
                  isRequired: false,
                })}
              </div>
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "languageProficiency",
                  lablel: "語文能力（最多300字））",
                  placeholder: "請描述您的語文能力",
                  isRequired: false,
                })}
              </div>
              <div>
                {TextareaItem({
                  keyName: "certificate",
                  lablel: "資格證照（最多300字）",
                  placeholder: "請描述您的資格證照",
                  isRequired: false,
                })}
              </div>
            </div>
          </section>
          <section
            className="row gx-1 mb-6 mb-md-9"
            aria-labelledby="educational-background"
          >
            <div className="col-md d-flex align-items-center">
              <h2 className="fw-medium fs-5 fs-md-4 mb-md-3">教育背景</h2>
              <p className="ms-auto text-natural-50 fs-8">欄位皆為選填</p>
            </div>
            <div className="col-md-8">
              <div className="mb-4 mb-md-6">
                {TextareaItem({
                  keyName: "education",
                  lablel: "學歷背景（最多500字）",
                  placeholder: "請描述您的學歷背景",
                  maxLength: 500,
                  isRequired: false,
                })}
              </div>
              <div>
                {TextareaItem({
                  keyName: "professionalTrainingWorkshops",
                  lablel: "專業培訓與工作坊（最多500字）",
                  placeholder: "請描述您參與過的專業培訓與工作坊",
                  maxLength: 500,
                  isRequired: false,
                })}
              </div>
            </div>
          </section>
          <div className="d-flex flex-column flex-md-row-reverse justify-content-center gap-4 gap-md-6">
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
              type="button"
              className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center fs-8 fs-md-7 pe-md-5"
            >
              匯出 PDF
              <span className="material-symbols-outlined fs-5 ms-md-1">
                keyboard_arrow_right
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
