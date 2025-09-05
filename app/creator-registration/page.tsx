"use client"
import { useState } from "react"
import { 
  User, 
  MapPin, 
  Calendar, 
  Upload, 
  Camera, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  FileText,
  CreditCard
} from "lucide-react"

export default function CreatorRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    fullNameKana: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    email: "",
    
    // Address Information
    postalCode: "",
    prefecture: "",
    city: "",
    address1: "",
    address2: "",
    
    // Identity Verification
    idType: "",
    idFront: null as File | null,
    idBack: null as File | null,
    selfie: null as File | null,
    
    // Bank Information
    bankName: "",
    branchName: "",
    accountType: "",
    accountNumber: "",
    accountHolder: "",
    
    // Content Information
    contentCategories: [] as string[],
    bio: "",
    socialLinks: {
      instagram: "",
      twitter: "",
      tiktok: ""
    }
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const steps = [
    { id: 1, title: "基本情報", description: "個人情報を入力" },
    { id: 2, title: "住所情報", description: "住所を入力" },
    { id: 3, title: "本人確認", description: "身分証明書をアップロード" },
    { id: 4, title: "銀行口座", description: "振込先口座を登録" },
    { id: 5, title: "コンテンツ情報", description: "活動内容を設定" },
    { id: 6, title: "確認・申請", description: "内容を確認して申請" }
  ]

  const prefectures = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
    "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
    "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
    "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
    "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
  ]

  const contentCategories = [
    "ビューティー", "ファッション", "フィットネス", "グルメ", "旅行",
    "アウトドア", "アート", "音楽", "ゲーム", "映画", "読書", "写真",
    "ライフスタイル", "テクノロジー", "教育", "その他"
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.fullName) newErrors.fullName = "氏名は必須です"
        if (!formData.fullNameKana) newErrors.fullNameKana = "フリガナは必須です"
        if (!formData.birthDate) newErrors.birthDate = "生年月日は必須です"
        if (!formData.gender) newErrors.gender = "性別は必須です"
        if (!formData.phoneNumber) newErrors.phoneNumber = "電話番号は必須です"
        if (!formData.email) newErrors.email = "メールアドレスは必須です"
        break
      case 2:
        if (!formData.postalCode) newErrors.postalCode = "郵便番号は必須です"
        if (!formData.prefecture) newErrors.prefecture = "都道府県は必須です"
        if (!formData.city) newErrors.city = "市区町村は必須です"
        if (!formData.address1) newErrors.address1 = "住所は必須です"
        break
      case 3:
        if (!formData.idType) newErrors.idType = "身分証明書の種類は必須です"
        if (!formData.idFront) newErrors.idFront = "身分証明書の表面は必須です"
        if (!formData.idBack) newErrors.idBack = "身分証明書の裏面は必須です"
        if (!formData.selfie) newErrors.selfie = "セルフィー写真は必須です"
        break
      case 4:
        if (!formData.bankName) newErrors.bankName = "銀行名は必須です"
        if (!formData.branchName) newErrors.branchName = "支店名は必須です"
        if (!formData.accountType) newErrors.accountType = "口座種別は必須です"
        if (!formData.accountNumber) newErrors.accountNumber = "口座番号は必須です"
        if (!formData.accountHolder) newErrors.accountHolder = "口座名義は必須です"
        break
      case 5:
        if (formData.contentCategories.length === 0) newErrors.contentCategories = "コンテンツカテゴリは必須です"
        if (!formData.bio) newErrors.bio = "自己紹介は必須です"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Submit application
      console.log("Submitting creator application:", formData)
      alert("申請が完了しました。審査結果は3営業日以内にメールでお知らせします。")
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">基本情報</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  氏名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="田中 花子"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  フリガナ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullNameKana}
                  onChange={(e) => handleInputChange("fullNameKana", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="タナカ ハナコ"
                />
                {errors.fullNameKana && <p className="text-red-500 text-sm mt-1">{errors.fullNameKana}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  生年月日 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  title="生年月日を選択してください"
                />
                {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  性別 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  title="性別を選択してください"
                >
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="090-1234-5678"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">住所情報</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                郵便番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => handleInputChange("postalCode", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="123-4567"
              />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  都道府県 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.prefecture}
                  onChange={(e) => handleInputChange("prefecture", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  title="都道府県を選択してください"
                >
                  <option value="">選択してください</option>
                  {prefectures.map((pref) => (
                    <option key={pref} value={pref}>{pref}</option>
                  ))}
                </select>
                {errors.prefecture && <p className="text-red-500 text-sm mt-1">{errors.prefecture}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  市区町村 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="渋谷区"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                住所 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.address1}
                onChange={(e) => handleInputChange("address1", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="道玄坂1-2-3"
              />
              {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                建物名・部屋番号
              </label>
              <input
                type="text"
                value={formData.address2}
                onChange={(e) => handleInputChange("address2", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="○○マンション 101号室"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">本人確認</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                身分証明書の種類 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.idType}
                onChange={(e) => handleInputChange("idType", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                title="身分証明書の種類を選択してください"
              >
                <option value="">選択してください</option>
                <option value="drivers_license">運転免許証</option>
                <option value="passport">パスポート</option>
                <option value="my_number">マイナンバーカード</option>
                <option value="residence_card">在留カード</option>
              </select>
              {errors.idType && <p className="text-red-500 text-sm mt-1">{errors.idType}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  身分証明書（表面） <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">画像をアップロード</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("idFront", e.target.files?.[0] || null)}
                    className="hidden"
                    id="idFront"
                  />
                  <label htmlFor="idFront" className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                    選択
                  </label>
                </div>
                {formData.idFront && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.idFront.name}</p>
                )}
                {errors.idFront && <p className="text-red-500 text-sm mt-1">{errors.idFront}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  身分証明書（裏面） <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">画像をアップロード</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("idBack", e.target.files?.[0] || null)}
                    className="hidden"
                    id="idBack"
                  />
                  <label htmlFor="idBack" className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                    選択
                  </label>
                </div>
                {formData.idBack && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.idBack.name}</p>
                )}
                {errors.idBack && <p className="text-red-500 text-sm mt-1">{errors.idBack}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                セルフィー写真 <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">身分証明書と一緒に撮影したセルフィー</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload("selfie", e.target.files?.[0] || null)}
                  className="hidden"
                  id="selfie"
                />
                <label htmlFor="selfie" className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  選択
                </label>
              </div>
              {formData.selfie && (
                <p className="text-sm text-green-600 mt-2">✓ {formData.selfie.name}</p>
              )}
              {errors.selfie && <p className="text-red-500 text-sm mt-1">{errors.selfie}</p>}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">銀行口座情報</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  銀行名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.bankName}
                  onChange={(e) => handleInputChange("bankName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="三菱UFJ銀行"
                />
                {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  支店名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.branchName}
                  onChange={(e) => handleInputChange("branchName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="渋谷支店"
                />
                {errors.branchName && <p className="text-red-500 text-sm mt-1">{errors.branchName}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  口座種別 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.accountType}
                  onChange={(e) => handleInputChange("accountType", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  title="口座種別を選択してください"
                >
                  <option value="">選択してください</option>
                  <option value="ordinary">普通預金</option>
                  <option value="savings">貯蓄預金</option>
                </select>
                {errors.accountType && <p className="text-red-500 text-sm mt-1">{errors.accountType}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  口座番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="1234567"
                />
                {errors.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                口座名義 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.accountHolder}
                onChange={(e) => handleInputChange("accountHolder", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="タナカ ハナコ"
              />
              {errors.accountHolder && <p className="text-red-500 text-sm mt-1">{errors.accountHolder}</p>}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">コンテンツ情報</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                コンテンツカテゴリ <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {contentCategories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.contentCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange("contentCategories", [...formData.contentCategories, category])
                        } else {
                          handleInputChange("contentCategories", formData.contentCategories.filter(c => c !== category))
                        }
                      }}
                      className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
              {errors.contentCategories && <p className="text-red-500 text-sm mt-1">{errors.contentCategories}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                自己紹介 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="あなたの活動内容や特技について教えてください..."
              />
              {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">SNSアカウント（任意）</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  type="text"
                  value={formData.socialLinks.instagram}
                  onChange={(e) => handleInputChange("socialLinks", { ...formData.socialLinks, instagram: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="@username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter
                </label>
                <input
                  type="text"
                  value={formData.socialLinks.twitter}
                  onChange={(e) => handleInputChange("socialLinks", { ...formData.socialLinks, twitter: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="@username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TikTok
                </label>
                <input
                  type="text"
                  value={formData.socialLinks.tiktok}
                  onChange={(e) => handleInputChange("socialLinks", { ...formData.socialLinks, tiktok: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="@username"
                />
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">申請内容の確認</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">基本情報</h3>
                <p className="text-sm text-gray-600">氏名: {formData.fullName}</p>
                <p className="text-sm text-gray-600">フリガナ: {formData.fullNameKana}</p>
                <p className="text-sm text-gray-600">生年月日: {formData.birthDate}</p>
                <p className="text-sm text-gray-600">性別: {formData.gender}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">住所</h3>
                <p className="text-sm text-gray-600">
                  〒{formData.postalCode} {formData.prefecture} {formData.city} {formData.address1} {formData.address2}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">コンテンツカテゴリ</h3>
                <p className="text-sm text-gray-600">{formData.contentCategories.join(", ")}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">審査について</h3>
                  <p className="text-sm text-blue-700">
                    申請内容を確認後、3営業日以内に審査結果をメールでお知らせします。
                    審査が完了するまで、クリエイター機能はご利用いただけません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">クリエイター登録</h1>
          <p className="text-gray-600">OnlyUでクリエイターとして活動を始めましょう</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center min-w-0 flex-1">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                  currentStep >= step.id
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "border-gray-300 text-gray-500"
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <span className="text-xs sm:text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="ml-2 sm:ml-3 hidden sm:block min-w-0">
                  <p className={`text-xs sm:text-sm font-medium truncate ${
                    currentStep >= step.id ? "text-gray-800" : "text-gray-500"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                    currentStep > step.id ? "bg-pink-500" : "bg-gray-300"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            前へ
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors w-full sm:w-auto"
            >
              次へ
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors w-full sm:w-auto"
            >
              申請する
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
