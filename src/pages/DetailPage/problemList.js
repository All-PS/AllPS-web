function ProblemList({ className }) {
  return (
    <div className={`w-full border min-w-[512px] ${className}`}>
      <table>
        <thead>
          <tr>
            <th>난이도</th>
            <th>제목</th>
            <th>출처</th>
            <th>유형</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ProblemList;
