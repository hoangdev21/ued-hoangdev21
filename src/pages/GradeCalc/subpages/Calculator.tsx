import React, { useState } from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import { Button, Input } from '../../../components/Common';
import { ArrowLeft, Plus, Trash2, Calculator as CalculatorIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Grade {
  subject: string;
  score: number;
  weight: number;
}

const Calculator: React.FC = () => {
  const navigate = useNavigate();
  const [grades, setGrades] = useState<Grade[]>([
    { subject: 'Toán cao cấp', score: 8.5, weight: 3 },
    { subject: 'Vật lý', score: 7.0, weight: 3 },
  ]);
  const [newSubject, setNewSubject] = useState('');
  const [newScore, setNewScore] = useState('');
  const [newWeight, setNewWeight] = useState('1');

  const calculateGPA = () => {
    if (grades.length === 0) return 0;
    const totalWeight = grades.reduce((sum, g) => sum + g.weight, 0);
    const totalScore = grades.reduce((sum, g) => sum + g.score * g.weight, 0);
    return Number((totalScore / totalWeight).toFixed(2));
  };

  const addGrade = () => {
    if (newSubject && newScore) {
      setGrades([
        ...grades,
        {
          subject: newSubject,
          score: parseFloat(newScore),
          weight: parseFloat(newWeight),
        },
      ]);
      setNewSubject('');
      setNewScore('');
      setNewWeight('1');
    }
  };

  const removeGrade = (index: number) => {
    setGrades(grades.filter((_, i) => i !== index));
  };

  const gpa = calculateGPA();
  const getGradeColor = (score: number) => {
    if (score >= 8.5) return 'text-emerald-600';
    if (score >= 7) return 'text-blue-600';
    if (score >= 5) return 'text-amber-600';
    return 'text-red-600';
  };

  const getGradeEmoji = (score: number) => {
    if (score >= 8.5) return '🌟';
    if (score >= 7) return '👍';
    if (score >= 5) return '👌';
    return '💪';
  };

  return (
    <MainLayout title="Tính điểm học phần">
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

        {/* GPA Display */}
        <div className="card-professional p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4">
            <CalculatorIcon size={28} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-gray-900 mb-2">Điểm trung bình tích lũy</h2>
          <div className="text-6xl font-bold text-gradient-professional mb-3">{gpa.toFixed(2)}</div>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-sm font-semibold">
            {gpa >= 3.6 ? '🌟 Xuất sắc' : gpa >= 3.0 ? '👍 Giỏi' : gpa >= 2.0 ? '👌 Khá' : '📚 Cần cố gắng'}
          </div>
        </div>

        {/* Add Grade Form */}
        <div className="card-professional p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Plus size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gradient-professional">Thêm học phần</h3>
          </div>
          <div className="space-y-4">
            <Input
              label="Tên học phần"
              placeholder="VD: Toán cao cấp"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="text-base"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Điểm số (0-10)"
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="8.5"
                value={newScore}
                onChange={(e) => setNewScore(e.target.value)}
                className="text-base"
              />
              <Input
                label="Tín chỉ"
                type="number"
                min="1"
                max="5"
                placeholder="3"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                className="text-base"
              />
            </div>
            <Button variant="gradient" className="w-full py-3 text-base font-semibold" onClick={addGrade}>
              <Plus size={20} className="mr-2" />
              Thêm học phần
            </Button>
          </div>
        </div>

        {/* Grades List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gradient-professional">Danh sách học phần ({grades.length})</h3>
          </div>

          {grades.length === 0 ? (
            <div className="card-professional p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h4 className="text-xl font-bold text-neutral-gray-900 mb-2">Chưa có học phần nào</h4>
              <p className="text-neutral-gray-600">Thêm học phần để bắt đầu tính điểm</p>
            </div>
          ) : (
            <div className="space-y-3">
              {grades.map((grade, index) => (
                <div key={index} className="card-professional p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-2xl">{getGradeEmoji(grade.score)}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-neutral-gray-900">{grade.subject}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className={`font-bold text-lg ${getGradeColor(grade.score)}`}>
                            {grade.score}
                          </span>
                          <span className="text-neutral-gray-400">•</span>
                          <span className="text-neutral-gray-600">{grade.weight} tín chỉ</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeGrade(index)}
                      className="ml-4 p-2"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {grades.length > 0 && (
          <div className="card-professional p-6">
            <h4 className="text-xl font-bold text-gradient-professional mb-6">Thống kê chi tiết</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="stats-card-professional">
                <div className="text-3xl font-bold text-blue-600 mb-2">{grades.length}</div>
                <div className="text-sm font-medium text-neutral-gray-600">Học phần</div>
              </div>
              <div className="stats-card-professional">
                <div className="text-3xl font-bold text-purple-600 mb-2">{grades.reduce((sum, g) => sum + g.weight, 0)}</div>
                <div className="text-sm font-medium text-neutral-gray-600">Tổng tín chỉ</div>
              </div>
              <div className="stats-card-professional">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{(grades.reduce((sum, g) => sum + g.score, 0) / grades.length).toFixed(1)}</div>
                <div className="text-sm font-medium text-neutral-gray-600">Điểm trung bình</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Calculator;