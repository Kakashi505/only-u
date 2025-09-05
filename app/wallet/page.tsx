"use client"
import { useState } from "react"
import { 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  Download, 
  AlertCircle,
  CheckCircle,
  Clock,
  Banknote,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react"

export default function WalletPage() {
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  // Mock wallet data
  const wallet = {
    availableBalance: 1250000,
    pendingBalance: 45000,
    totalEarned: 2500000,
    totalWithdrawn: 1250000,
    nextPayout: "2024-04-15",
    payoutMethod: "銀行振込"
  }

  const bankAccounts = [
    {
      id: 1,
      bankName: "三菱UFJ銀行",
      accountNumber: "****1234",
      accountHolder: "田中 花子",
      isVerified: true,
      isDefault: true
    },
    {
      id: 2,
      bankName: "みずほ銀行",
      accountNumber: "****5678",
      accountHolder: "田中 花子",
      isVerified: true,
      isDefault: false
    }
  ]

  const transactions = [
    {
      id: 1,
      type: "withdrawal",
      amount: 500000,
      status: "completed",
      date: "2024-03-15",
      description: "銀行振込 - 三菱UFJ銀行",
      reference: "TXN-20240315-001"
    },
    {
      id: 2,
      type: "earning",
      amount: 125000,
      status: "completed",
      date: "2024-03-14",
      description: "月次収益 - 2024年3月",
      reference: "EARN-202403-001"
    },
    {
      id: 3,
      type: "withdrawal",
      amount: 300000,
      status: "pending",
      date: "2024-03-10",
      description: "銀行振込 - みずほ銀行",
      reference: "TXN-20240310-002"
    },
    {
      id: 4,
      type: "earning",
      amount: 89000,
      status: "completed",
      date: "2024-03-08",
      description: "個別投稿販売収益",
      reference: "EARN-20240308-001"
    },
    {
      id: 5,
      type: "withdrawal",
      amount: 750000,
      status: "completed",
      date: "2024-02-28",
      description: "銀行振込 - 三菱UFJ銀行",
      reference: "TXN-20240228-001"
    }
  ]

  const handleWithdraw = () => {
    if (!withdrawAmount || !selectedBank) {
      alert("出金額と振込先を選択してください")
      return
    }
    
    const amount = parseInt(withdrawAmount)
    if (amount > wallet.availableBalance) {
      alert("残高が不足しています")
      return
    }
    
    if (amount < 1000) {
      alert("最低出金額は1,000円です")
      return
    }
    
    // Handle withdrawal logic
    console.log("Withdrawing ¥", amount, "to bank", selectedBank)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "failed":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "完了"
      case "pending":
        return "処理中"
      case "failed":
        return "失敗"
      default:
        return "不明"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">ウォレット</h1>
          <p className="text-gray-600">収益の管理と出金を行います</p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-sm text-gray-500">利用可能残高</div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              ¥{wallet.availableBalance.toLocaleString()}
            </div>
            <div className="text-sm text-green-600">出金可能</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-sm text-gray-500">保留中残高</div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              ¥{wallet.pendingBalance.toLocaleString()}
            </div>
            <div className="text-sm text-yellow-600">処理中</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm text-gray-500">総収益</div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              ¥{wallet.totalEarned.toLocaleString()}
            </div>
            <div className="text-sm text-blue-600">累計</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Withdrawal Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">出金申請</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    出金額
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">¥</span>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="1000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    最低出金額: ¥1,000
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    振込先
                  </label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    title="振込先銀行を選択してください"
                  >
                    <option value="">振込先を選択</option>
                    {bankAccounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.bankName} - {account.accountNumber}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleWithdraw}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                >
                  出金申請
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">次回出金日</span>
                </div>
                <p className="text-sm text-blue-600">{wallet.nextPayout}</p>
              </div>
            </div>

            {/* Bank Accounts */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">振込先口座</h2>
                <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
                  追加
                </button>
              </div>
              
              <div className="space-y-3">
                {bankAccounts.map((account) => (
                  <div key={account.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">{account.bankName}</h3>
                      <div className="flex items-center gap-2">
                        {account.isDefault && (
                          <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded">
                            デフォルト
                          </span>
                        )}
                        {account.isVerified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{account.accountNumber}</p>
                    <p className="text-sm text-gray-500">{account.accountHolder}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">取引履歴</h2>
                  <button className="text-pink-500 hover:text-pink-600 font-medium flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    エクスポート
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          transaction.type === "earning" 
                            ? "bg-green-100" 
                            : "bg-blue-100"
                        }`}>
                          {transaction.type === "earning" ? (
                            <ArrowDownLeft className={`w-5 h-5 ${
                              transaction.type === "earning" 
                                ? "text-green-600" 
                                : "text-blue-600"
                            }`} />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{transaction.description}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{transaction.date}</span>
                            <span>•</span>
                            <span>{transaction.reference}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          transaction.type === "earning" 
                            ? "text-green-600" 
                            : "text-gray-800"
                        }`}>
                          {transaction.type === "earning" ? "+" : "-"}¥{transaction.amount.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {getStatusIcon(transaction.status)}
                          <span className="text-gray-500">{getStatusText(transaction.status)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
