import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import { Button } from '../../../components/Common';
import { ArrowLeft, TrendingUp, Award, Target, BookOpen, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Results: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - in real app, this would come from state or storage
  const currentGPA = 8.2;
  const totalCredits = 45;
  const completedSubjects = 12;
  const targetGPA = 8.5;

  const getProgressColor = (current: number, target: number) => {
    const diff = current - target;
    if (diff >= 0) return 'text-emerald-600';
    if (diff >= -0.5) return 'text-amber-600';
    return 'text-red-600';
  };

  const getProgressEmoji = (current: number, target: number) => {
    const diff = current - target;
    if (diff >= 0) return '🎉';
    if (diff >= -0.5) return '👍';
    return '💪';
  };

  const getGPAStatus = (gpa: number) => {
    if (gpa >= 9.0) return { text: 'Xuất sắc', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
    if (gpa >= 8.0) return { text: 'Giỏi', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };
    if (gpa >= 7.0) return { text: 'Khá', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
    if (gpa >= 5.0) return { text: 'Trung bình', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
    return { text: 'Cần cố gắng', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const status = getGPAStatus(currentGPA);

  return (
    <MainLayout title="Kết quả học tập">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate('/grade-calc')}
            className="flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeft size={20} />
            Quay lại
          </Button>
        </div>

        {/* Header */}
        <div className="card-professional p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4">
            <Award size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gradient-professional mb-3">
            Kết quả học tập
          </h1>
          <p className="text-neutral-gray-600 text-lg max-w-md mx-auto leading-relaxed">
            Tổng quan về thành tích và mục tiêu học tập của bạn
          </p>
        </div>

        {/* Current GPA Card */}
        <div className="card-professional p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/20 to-blue-400/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <p className="text-neutral-gray-600 font-medium">Điểm trung bình tích lũy</p>
            </div>
            <div className="text-6xl font-bold text-gradient-professional mb-4">
              {currentGPA.toFixed(2)}
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${status.bg} ${status.border}`}>
              <span className="text-2xl">🎓</span>
              <span className={`font-bold ${status.color}`}>{status.text}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="card-professional p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient-professional mb-1">{completedSubjects}</div>
            <p className="text-neutral-gray-600 text-sm">Học phần hoàn thành</p>
          </div>
          <div className="card-professional p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient-professional mb-1">{totalCredits}</div>
            <p className="text-neutral-gray-600 text-sm">Tổng tín chỉ</p>
          </div>
        </div>

        {/* Target Progress */}
        <div className="card-professional p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Target size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gradient-professional">Mục tiêu GPA</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
              <div>
                <p className="text-sm text-neutral-gray-600">Mục tiêu hiện tại</p>
                <p className="text-2xl font-bold text-gradient-professional">{targetGPA.toFixed(1)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-neutral-gray-600">Chênh lệch</p>
                <p className={`text-xl font-bold ${getProgressColor(currentGPA, targetGPA)}`}>
                  {getProgressEmoji(currentGPA, targetGPA)} {(currentGPA - targetGPA).toFixed(1)}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-neutral-gray-600">
                <span>Tiến độ</span>
                <span>{Math.min((currentGPA / targetGPA) * 100, 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-neutral-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 h-3 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${Math.min((currentGPA / targetGPA) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-neutral-gray-600 text-center mt-3">
                {currentGPA >= targetGPA
                  ? '🎉 Chúc mừng! Bạn đã đạt mục tiêu!'
                  : `💪 Còn ${(targetGPA - currentGPA).toFixed(1)} điểm để đạt mục tiêu`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="card-professional p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gradient-professional">Phân bố điểm số</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <p className="font-bold text-neutral-gray-900">A (8.5-10.0)</p>
                  <p className="text-sm text-neutral-gray-600">Xuất sắc</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-emerald-600">6</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💎</span>
                <div>
                  <p className="font-bold text-neutral-gray-900">B (7.0-8.4)</p>
                  <p className="text-sm text-neutral-gray-600">Giỏi</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-bold text-neutral-gray-900">C (5.0-6.9)</p>
                  <p className="text-sm text-neutral-gray-600">Khá</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-amber-600">2</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="card-professional p-6">
          <h3 className="text-xl font-bold text-gradient-professional mb-6">💡 Khuyến nghị phát triển</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-bold text-neutral-gray-900 mb-1">Tiếp tục phát huy</h4>
                  <p className="text-neutral-gray-700 text-sm leading-relaxed">
                    Bạn đang có kết quả học tập rất tốt. Hãy duy trì phong độ này và tiếp tục nỗ lực!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-bold text-neutral-gray-900 mb-1">Đăng ký học phần nâng cao</h4>
                  <p className="text-neutral-gray-700 text-sm leading-relaxed">
                    Với GPA hiện tại, bạn có thể thử sức với các học phần chuyên sâu hơn để nâng cao kiến thức.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔬</span>
                <div>
                  <h4 className="font-bold text-neutral-gray-900 mb-1">Tham gia nghiên cứu</h4>
                  <p className="text-neutral-gray-700 text-sm leading-relaxed">
                    Xem xét tham gia các dự án nghiên cứu hoặc thực tập để nâng cao hồ sơ cá nhân và kỹ năng thực tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Results;