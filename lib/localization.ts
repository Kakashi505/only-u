// Japanese Localization System for OnlyU

export type Locale = 'ja' | 'en'

export interface LocalizedStrings {
  // Navigation
  navigation: {
    posts: string
    creators: string
    home: string
    feed: string
    ranking: string
    messages: string
    account: string
    search: string
  }
  
  // Common Actions
  actions: {
    follow: string
    following: string
    subscribe: string
    subscribed: string
    like: string
    comment: string
    share: string
    bookmark: string
    save: string
    cancel: string
    confirm: string
    delete: string
    edit: string
    create: string
    update: string
    send: string
    upload: string
    download: string
    view: string
    hide: string
    show: string
    back: string
    next: string
    previous: string
    close: string
    open: string
    select: string
    filter: string
    sort: string
    search: string
    login: string
    logout: string
    register: string
    signup: string
    signin: string
  }
  
  // Content Types
  content: {
    posts: string
    creators: string
    subscribers: string
    followers: string
    following: string
    likes: string
    comments: string
    views: string
    shares: string
    free: string
    paid: string
    premium: string
    explicit: string
    adult: string
    private: string
    public: string
    featured: string
    trending: string
    popular: string
    latest: string
    oldest: string
  }
  
  // Time
  time: {
    now: string
    minutesAgo: string
    hoursAgo: string
    daysAgo: string
    weeksAgo: string
    monthsAgo: string
    yearsAgo: string
    today: string
    yesterday: string
    tomorrow: string
  }
  
  // Subscription Plans
  subscription: {
    basic: string
    premium: string
    vip: string
    monthly: string
    yearly: string
    lifetime: string
    plan: string
    plans: string
    subscribe: string
    unsubscribe: string
    renew: string
    expired: string
    active: string
    pending: string
    cancelled: string
  }
  
  // Payment
  payment: {
    price: string
    total: string
    subtotal: string
    tax: string
    discount: string
    coupon: string
    payment: string
    purchase: string
    buy: string
    sell: string
    earnings: string
    revenue: string
    income: string
    wallet: string
    balance: string
    withdraw: string
    deposit: string
    refund: string
    invoice: string
    receipt: string
  }
  
  // Messages
  messages: {
    inbox: string
    sent: string
    drafts: string
    broadcast: string
    direct: string
    group: string
    chat: string
    conversation: string
    reply: string
    forward: string
    markRead: string
    markUnread: string
    delete: string
    archive: string
    spam: string
    block: string
    unblock: string
    report: string
  }
  
  // Profile
  profile: {
    profile: string
    bio: string
    location: string
    website: string
    social: string
    verified: string
    online: string
    offline: string
    lastSeen: string
    joined: string
    memberSince: string
    age: string
    gender: string
    birthday: string
    phone: string
    email: string
    address: string
    city: string
    country: string
    language: string
    timezone: string
  }
  
  // Settings
  settings: {
    settings: string
    preferences: string
    privacy: string
    security: string
    notifications: string
    appearance: string
    language: string
    theme: string
    darkMode: string
    lightMode: string
    autoMode: string
    fontSize: string
    sound: string
    vibration: string
    dataUsage: string
    storage: string
    cache: string
    backup: string
    restore: string
    export: string
    import: string
  }
  
  // Forms
  forms: {
    required: string
    optional: string
    invalid: string
    valid: string
    error: string
    success: string
    warning: string
    info: string
    loading: string
    saving: string
    submitting: string
    processing: string
    complete: string
    incomplete: string
    draft: string
    published: string
    unpublished: string
    pending: string
    approved: string
    rejected: string
  }
  
  // Age Verification
  ageVerification: {
    title: string
    message: string
    confirm: string
    deny: string
    warning: string
    adultContent: string
    ageRestriction: string
    verification: string
  }
  
  // Content Moderation
  moderation: {
    explicit: string
    adult: string
    mature: string
    sensitive: string
    warning: string
    blur: string
    hide: string
    show: string
    unlock: string
    lock: string
    restricted: string
    available: string
    preview: string
    fullView: string
  }
  
  // Dashboard
  dashboard: {
    overview: string
    analytics: string
    statistics: string
    performance: string
    insights: string
    reports: string
    metrics: string
    growth: string
    decline: string
    increase: string
    decrease: string
    total: string
    average: string
    maximum: string
    minimum: string
    percentage: string
    ratio: string
    rate: string
  }
  
  // Creator Tools
  creator: {
    dashboard: string
    studio: string
    content: string
    upload: string
    edit: string
    publish: string
    schedule: string
    draft: string
    analytics: string
    earnings: string
    subscribers: string
    fans: string
    supporters: string
    patrons: string
    sponsors: string
    collaborators: string
    partners: string
  }
  
  // Error Messages
  errors: {
    notFound: string
    unauthorized: string
    forbidden: string
    serverError: string
    networkError: string
    timeout: string
    invalidInput: string
    validationError: string
    duplicateError: string
    conflictError: string
    rateLimit: string
    maintenance: string
    offline: string
    connectionLost: string
    tryAgain: string
    contactSupport: string
  }
  
  // Success Messages
  success: {
    saved: string
    updated: string
    deleted: string
    created: string
    published: string
    sent: string
    uploaded: string
    downloaded: string
    subscribed: string
    unsubscribed: string
    followed: string
    unfollowed: string
    liked: string
    bookmarked: string
    shared: string
    reported: string
    blocked: string
    unblocked: string
  }
}

export const japaneseStrings: LocalizedStrings = {
  navigation: {
    posts: '投稿',
    creators: 'クリエイター',
    home: 'ホーム',
    feed: 'フィード',
    ranking: 'ランキング',
    messages: 'メッセージ',
    account: 'アカウント',
    search: '検索'
  },
  
  actions: {
    follow: 'フォロー',
    following: 'フォロー中',
    subscribe: '購読',
    subscribed: '購読中',
    like: 'いいね',
    comment: 'コメント',
    share: 'シェア',
    bookmark: 'ブックマーク',
    save: '保存',
    cancel: 'キャンセル',
    confirm: '確認',
    delete: '削除',
    edit: '編集',
    create: '作成',
    update: '更新',
    send: '送信',
    upload: 'アップロード',
    download: 'ダウンロード',
    view: '表示',
    hide: '非表示',
    show: '表示',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    close: '閉じる',
    open: '開く',
    select: '選択',
    filter: 'フィルター',
    sort: '並び替え',
    search: '検索',
    login: 'ログイン',
    logout: 'ログアウト',
    register: '登録',
    signup: 'サインアップ',
    signin: 'サインイン'
  },
  
  content: {
    posts: '投稿',
    creators: 'クリエイター',
    subscribers: '購読者',
    followers: 'フォロワー',
    following: 'フォロー中',
    likes: 'いいね',
    comments: 'コメント',
    views: '閲覧',
    shares: 'シェア',
    free: '無料',
    paid: '有料',
    premium: 'プレミアム',
    explicit: 'アダルト',
    adult: 'アダルト',
    private: 'プライベート',
    public: '公開',
    featured: 'おすすめ',
    trending: 'トレンド',
    popular: '人気',
    latest: '最新',
    oldest: '古い順'
  },
  
  time: {
    now: '今',
    minutesAgo: '分前',
    hoursAgo: '時間前',
    daysAgo: '日前',
    weeksAgo: '週前',
    monthsAgo: 'ヶ月前',
    yearsAgo: '年前',
    today: '今日',
    yesterday: '昨日',
    tomorrow: '明日'
  },
  
  subscription: {
    basic: 'ベーシック',
    premium: 'プレミアム',
    vip: 'VIP',
    monthly: '月額',
    yearly: '年額',
    lifetime: '生涯',
    plan: 'プラン',
    plans: 'プラン',
    subscribe: '購読',
    unsubscribe: '購読解除',
    renew: '更新',
    expired: '期限切れ',
    active: 'アクティブ',
    pending: '保留中',
    cancelled: 'キャンセル済み'
  },
  
  payment: {
    price: '価格',
    total: '合計',
    subtotal: '小計',
    tax: '税',
    discount: '割引',
    coupon: 'クーポン',
    payment: '支払い',
    purchase: '購入',
    buy: '購入',
    sell: '販売',
    earnings: '収益',
    revenue: '売上',
    income: '収入',
    wallet: 'ウォレット',
    balance: '残高',
    withdraw: '出金',
    deposit: '入金',
    refund: '返金',
    invoice: '請求書',
    receipt: '領収書'
  },
  
  messages: {
    inbox: '受信箱',
    sent: '送信済み',
    drafts: '下書き',
    broadcast: 'ブロードキャスト',
    direct: 'ダイレクト',
    group: 'グループ',
    chat: 'チャット',
    conversation: '会話',
    reply: '返信',
    forward: '転送',
    markRead: '既読にする',
    markUnread: '未読にする',
    delete: '削除',
    archive: 'アーカイブ',
    spam: 'スパム',
    block: 'ブロック',
    unblock: 'ブロック解除',
    report: '報告'
  },
  
  profile: {
    profile: 'プロフィール',
    bio: '自己紹介',
    location: '場所',
    website: 'ウェブサイト',
    social: 'SNS',
    verified: '認証済み',
    online: 'オンライン',
    offline: 'オフライン',
    lastSeen: '最終ログイン',
    joined: '参加日',
    memberSince: 'メンバー登録日',
    age: '年齢',
    gender: '性別',
    birthday: '誕生日',
    phone: '電話番号',
    email: 'メールアドレス',
    address: '住所',
    city: '市区町村',
    country: '国',
    language: '言語',
    timezone: 'タイムゾーン'
  },
  
  settings: {
    settings: '設定',
    preferences: '設定',
    privacy: 'プライバシー',
    security: 'セキュリティ',
    notifications: '通知',
    appearance: '外観',
    language: '言語',
    theme: 'テーマ',
    darkMode: 'ダークモード',
    lightMode: 'ライトモード',
    autoMode: '自動',
    fontSize: 'フォントサイズ',
    sound: '音',
    vibration: '振動',
    dataUsage: 'データ使用量',
    storage: 'ストレージ',
    cache: 'キャッシュ',
    backup: 'バックアップ',
    restore: '復元',
    export: 'エクスポート',
    import: 'インポート'
  },
  
  forms: {
    required: '必須',
    optional: '任意',
    invalid: '無効',
    valid: '有効',
    error: 'エラー',
    success: '成功',
    warning: '警告',
    info: '情報',
    loading: '読み込み中',
    saving: '保存中',
    submitting: '送信中',
    processing: '処理中',
    complete: '完了',
    incomplete: '未完了',
    draft: '下書き',
    published: '公開済み',
    unpublished: '非公開',
    pending: '保留中',
    approved: '承認済み',
    rejected: '拒否済み'
  },
  
  ageVerification: {
    title: '年齢確認',
    message: 'ここから先は、アダルトコンテンツが含まれております。18歳未満の方のアクセスは固くお断りします。あなたは18歳以上ですか？',
    confirm: 'はい',
    deny: 'いいえ',
    warning: 'アダルトコンテンツ',
    adultContent: 'アダルトコンテンツ',
    ageRestriction: '18歳未満の方のアクセスは固くお断りします',
    verification: '年齢確認'
  },
  
  moderation: {
    explicit: 'アダルト',
    adult: 'アダルト',
    mature: '成人向け',
    sensitive: 'センシティブ',
    warning: '警告',
    blur: 'ぼかし',
    hide: '非表示',
    show: '表示',
    unlock: 'ロック解除',
    lock: 'ロック',
    restricted: '制限あり',
    available: '利用可能',
    preview: 'プレビュー',
    fullView: '全体表示'
  },
  
  dashboard: {
    overview: '概要',
    analytics: 'アナリティクス',
    statistics: '統計',
    performance: 'パフォーマンス',
    insights: 'インサイト',
    reports: 'レポート',
    metrics: 'メトリクス',
    growth: '成長',
    decline: '減少',
    increase: '増加',
    decrease: '減少',
    total: '合計',
    average: '平均',
    maximum: '最大',
    minimum: '最小',
    percentage: 'パーセント',
    ratio: '比率',
    rate: '率'
  },
  
  creator: {
    dashboard: 'ダッシュボード',
    studio: 'スタジオ',
    content: 'コンテンツ',
    upload: 'アップロード',
    edit: '編集',
    publish: '公開',
    schedule: 'スケジュール',
    draft: '下書き',
    analytics: 'アナリティクス',
    earnings: '収益',
    subscribers: '購読者',
    fans: 'ファン',
    supporters: 'サポーター',
    patrons: 'パトロン',
    sponsors: 'スポンサー',
    collaborators: 'コラボレーター',
    partners: 'パートナー'
  },
  
  errors: {
    notFound: '見つかりません',
    unauthorized: '認証が必要です',
    forbidden: 'アクセスが拒否されました',
    serverError: 'サーバーエラーが発生しました',
    networkError: 'ネットワークエラーが発生しました',
    timeout: 'タイムアウトしました',
    invalidInput: '無効な入力です',
    validationError: '入力内容に誤りがあります',
    duplicateError: '重複しています',
    conflictError: '競合が発生しました',
    rateLimit: 'リクエスト制限に達しました',
    maintenance: 'メンテナンス中です',
    offline: 'オフラインです',
    connectionLost: '接続が失われました',
    tryAgain: '再試行してください',
    contactSupport: 'サポートにお問い合わせください'
  },
  
  success: {
    saved: '保存されました',
    updated: '更新されました',
    deleted: '削除されました',
    created: '作成されました',
    published: '公開されました',
    sent: '送信されました',
    uploaded: 'アップロードされました',
    downloaded: 'ダウンロードされました',
    subscribed: '購読されました',
    unsubscribed: '購読解除されました',
    followed: 'フォローされました',
    unfollowed: 'フォロー解除されました',
    liked: 'いいねされました',
    bookmarked: 'ブックマークされました',
    shared: 'シェアされました',
    reported: '報告されました',
    blocked: 'ブロックされました',
    unblocked: 'ブロック解除されました'
  }
}

export const englishStrings: LocalizedStrings = {
  navigation: {
    posts: 'Posts',
    creators: 'Creators',
    home: 'Home',
    feed: 'Feed',
    ranking: 'Ranking',
    messages: 'Messages',
    account: 'Account',
    search: 'Search'
  },
  
  actions: {
    follow: 'Follow',
    following: 'Following',
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
    like: 'Like',
    comment: 'Comment',
    share: 'Share',
    bookmark: 'Bookmark',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    update: 'Update',
    send: 'Send',
    upload: 'Upload',
    download: 'Download',
    view: 'View',
    hide: 'Hide',
    show: 'Show',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    open: 'Open',
    select: 'Select',
    filter: 'Filter',
    sort: 'Sort',
    search: 'Search',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    signup: 'Sign Up',
    signin: 'Sign In'
  },
  
  content: {
    posts: 'Posts',
    creators: 'Creators',
    subscribers: 'Subscribers',
    followers: 'Followers',
    following: 'Following',
    likes: 'Likes',
    comments: 'Comments',
    views: 'Views',
    shares: 'Shares',
    free: 'Free',
    paid: 'Paid',
    premium: 'Premium',
    explicit: 'Explicit',
    adult: 'Adult',
    private: 'Private',
    public: 'Public',
    featured: 'Featured',
    trending: 'Trending',
    popular: 'Popular',
    latest: 'Latest',
    oldest: 'Oldest'
  },
  
  time: {
    now: 'Now',
    minutesAgo: 'minutes ago',
    hoursAgo: 'hours ago',
    daysAgo: 'days ago',
    weeksAgo: 'weeks ago',
    monthsAgo: 'months ago',
    yearsAgo: 'years ago',
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow'
  },
  
  subscription: {
    basic: 'Basic',
    premium: 'Premium',
    vip: 'VIP',
    monthly: 'Monthly',
    yearly: 'Yearly',
    lifetime: 'Lifetime',
    plan: 'Plan',
    plans: 'Plans',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
    renew: 'Renew',
    expired: 'Expired',
    active: 'Active',
    pending: 'Pending',
    cancelled: 'Cancelled'
  },
  
  payment: {
    price: 'Price',
    total: 'Total',
    subtotal: 'Subtotal',
    tax: 'Tax',
    discount: 'Discount',
    coupon: 'Coupon',
    payment: 'Payment',
    purchase: 'Purchase',
    buy: 'Buy',
    sell: 'Sell',
    earnings: 'Earnings',
    revenue: 'Revenue',
    income: 'Income',
    wallet: 'Wallet',
    balance: 'Balance',
    withdraw: 'Withdraw',
    deposit: 'Deposit',
    refund: 'Refund',
    invoice: 'Invoice',
    receipt: 'Receipt'
  },
  
  messages: {
    inbox: 'Inbox',
    sent: 'Sent',
    drafts: 'Drafts',
    broadcast: 'Broadcast',
    direct: 'Direct',
    group: 'Group',
    chat: 'Chat',
    conversation: 'Conversation',
    reply: 'Reply',
    forward: 'Forward',
    markRead: 'Mark as Read',
    markUnread: 'Mark as Unread',
    delete: 'Delete',
    archive: 'Archive',
    spam: 'Spam',
    block: 'Block',
    unblock: 'Unblock',
    report: 'Report'
  },
  
  profile: {
    profile: 'Profile',
    bio: 'Bio',
    location: 'Location',
    website: 'Website',
    social: 'Social',
    verified: 'Verified',
    online: 'Online',
    offline: 'Offline',
    lastSeen: 'Last Seen',
    joined: 'Joined',
    memberSince: 'Member Since',
    age: 'Age',
    gender: 'Gender',
    birthday: 'Birthday',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    city: 'City',
    country: 'Country',
    language: 'Language',
    timezone: 'Timezone'
  },
  
  settings: {
    settings: 'Settings',
    preferences: 'Preferences',
    privacy: 'Privacy',
    security: 'Security',
    notifications: 'Notifications',
    appearance: 'Appearance',
    language: 'Language',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    autoMode: 'Auto',
    fontSize: 'Font Size',
    sound: 'Sound',
    vibration: 'Vibration',
    dataUsage: 'Data Usage',
    storage: 'Storage',
    cache: 'Cache',
    backup: 'Backup',
    restore: 'Restore',
    export: 'Export',
    import: 'Import'
  },
  
  forms: {
    required: 'Required',
    optional: 'Optional',
    invalid: 'Invalid',
    valid: 'Valid',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    loading: 'Loading',
    saving: 'Saving',
    submitting: 'Submitting',
    processing: 'Processing',
    complete: 'Complete',
    incomplete: 'Incomplete',
    draft: 'Draft',
    published: 'Published',
    unpublished: 'Unpublished',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected'
  },
  
  ageVerification: {
    title: 'Age Verification',
    message: 'This site contains adult content. Access is restricted to users 18 years and older. Are you 18 or older?',
    confirm: 'Yes',
    deny: 'No',
    warning: 'Adult Content',
    adultContent: 'Adult Content',
    ageRestriction: 'Access restricted to users 18 years and older',
    verification: 'Age Verification'
  },
  
  moderation: {
    explicit: 'Explicit',
    adult: 'Adult',
    mature: 'Mature',
    sensitive: 'Sensitive',
    warning: 'Warning',
    blur: 'Blur',
    hide: 'Hide',
    show: 'Show',
    unlock: 'Unlock',
    lock: 'Lock',
    restricted: 'Restricted',
    available: 'Available',
    preview: 'Preview',
    fullView: 'Full View'
  },
  
  dashboard: {
    overview: 'Overview',
    analytics: 'Analytics',
    statistics: 'Statistics',
    performance: 'Performance',
    insights: 'Insights',
    reports: 'Reports',
    metrics: 'Metrics',
    growth: 'Growth',
    decline: 'Decline',
    increase: 'Increase',
    decrease: 'Decrease',
    total: 'Total',
    average: 'Average',
    maximum: 'Maximum',
    minimum: 'Minimum',
    percentage: 'Percentage',
    ratio: 'Ratio',
    rate: 'Rate'
  },
  
  creator: {
    dashboard: 'Dashboard',
    studio: 'Studio',
    content: 'Content',
    upload: 'Upload',
    edit: 'Edit',
    publish: 'Publish',
    schedule: 'Schedule',
    draft: 'Draft',
    analytics: 'Analytics',
    earnings: 'Earnings',
    subscribers: 'Subscribers',
    fans: 'Fans',
    supporters: 'Supporters',
    patrons: 'Patrons',
    sponsors: 'Sponsors',
    collaborators: 'Collaborators',
    partners: 'Partners'
  },
  
  errors: {
    notFound: 'Not Found',
    unauthorized: 'Unauthorized',
    forbidden: 'Forbidden',
    serverError: 'Server Error',
    networkError: 'Network Error',
    timeout: 'Timeout',
    invalidInput: 'Invalid Input',
    validationError: 'Validation Error',
    duplicateError: 'Duplicate Error',
    conflictError: 'Conflict Error',
    rateLimit: 'Rate Limit Exceeded',
    maintenance: 'Under Maintenance',
    offline: 'Offline',
    connectionLost: 'Connection Lost',
    tryAgain: 'Try Again',
    contactSupport: 'Contact Support'
  },
  
  success: {
    saved: 'Saved',
    updated: 'Updated',
    deleted: 'Deleted',
    created: 'Created',
    published: 'Published',
    sent: 'Sent',
    uploaded: 'Uploaded',
    downloaded: 'Downloaded',
    subscribed: 'Subscribed',
    unsubscribed: 'Unsubscribed',
    followed: 'Followed',
    unfollowed: 'Unfollowed',
    liked: 'Liked',
    bookmarked: 'Bookmarked',
    shared: 'Shared',
    reported: 'Reported',
    blocked: 'Blocked',
    unblocked: 'Unblocked'
  }
}

// Localization hook
export function useLocalization(locale: Locale = 'ja'): LocalizedStrings {
  return locale === 'ja' ? japaneseStrings : englishStrings
}

// Utility functions
export function formatTimeAgo(date: Date, locale: Locale = 'ja'): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  const strings = locale === 'ja' ? japaneseStrings : englishStrings
  
  if (diffInSeconds < 60) {
    return strings.time.now
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return locale === 'ja' ? `${minutes}${strings.time.minutesAgo}` : `${minutes} ${strings.time.minutesAgo}`
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return locale === 'ja' ? `${hours}${strings.time.hoursAgo}` : `${hours} ${strings.time.hoursAgo}`
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400)
    return locale === 'ja' ? `${days}${strings.time.daysAgo}` : `${days} ${strings.time.daysAgo}`
  } else {
    return date.toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US')
  }
}

export function formatCurrency(amount: number, locale: Locale = 'ja'): string {
  if (locale === 'ja') {
    return `¥${amount.toLocaleString('ja-JP')}`
  } else {
    return `$${amount.toLocaleString('en-US')}`
  }
}

export function formatNumber(number: number, locale: Locale = 'ja'): string {
  return number.toLocaleString(locale === 'ja' ? 'ja-JP' : 'en-US')
}
