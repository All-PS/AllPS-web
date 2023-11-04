import React from "react";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceIntro() {
  return (
    <div className="flex flex-col items-center border border-black w-4/5 rounded-[3rem] md:rounded-[5.5rem] text-center px-8 py-40 max-w-[900px]">
      <p className="mb-24 text-5xl font-bold">어서오세요!</p>
      <div className="flex flex-col items-center text-2xl font-light space-y-3">
        <p>프로그래밍 능력 향상을 위한 여정에 오신 여러분을 환영합니다.</p>
        <p>
          AllPS는 여러 온라인 저지 플랫폼의 문제들을 한 곳에 모아주는
          서비스입니다.
        </p>
        <p>여러분에게 도전적이고 유익한 프로그래밍 경험을 제공합니다.</p>
      </div>
      <p className="mt-40 mb-24 text-5xl font-bold">
        AllPS는 다음 기능을 제공합니다!
      </p>
      <p className="mb-12 text-2xl font-semibold">
        1. 다양한 온라인 저지 플랫폼 문제 통합
      </p>
      <div className="flex flex-col items-center text-2xl font-light space-y-3">
        <p>문제를 풀기 위해 이곳저곳을 돌아다닐 필요가 없습니다.</p>
        <p>다음 플랫폼들을 AllPS에서 한눈에 확인해보세요.</p>
      </div>
      <div className="flex flex-col items-center gap-y-12 mt-12 mb-24">
        <div className="inline-flex gap-x-12">
          <div className="flex items-center justify-center border border-black rounded-full w-[250px] h-[65px] p-1">
            <img src={`${process.env.PUBLIC_URL}/platform/baekjoon-logo.png`} alt="백준" className="max-h-full max-w-full" />
          </div>
          <div className="flex items-center justify-center border border-black rounded-full w-[250px] h-[65px] px-4">
            <img
              src={`${process.env.PUBLIC_URL}/platform/programmers-logo.png`}
              alt="프로그래머스"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
        <div className="inline-flex gap-x-12">
          <div className="flex items-center justify-center border border-black rounded-full w-[250px] h-[65px] px-4">
            <img src={`${process.env.PUBLIC_URL}/platform/codeforce-logo.png`} alt="코드포스" className="max-h-full max-w-full" />
          </div>
          <div className="flex items-center justify-center border border-black rounded-full w-[250px] h-[65px] p-1.5 bg-black">
            <img src={`${process.env.PUBLIC_URL}/platform/codetree-logo.png`} alt="코드트리" className="max-h-full max-w-full" />
          </div>
          <div className="flex items-center justify-center border border-black rounded-full w-[250px] h-[65px] p-4">
            <img src={`${process.env.PUBLIC_URL}/platform/algospot-logo.png`} alt="알고스팟" className="max-h-full max-w-full" />
          </div>
        </div>
      </div>
      <p className="mb-12 text-2xl font-semibold">2. 문제 난이도 통일</p>
      <div className="flex flex-col items-center text-2xl font-light space-y-3">
        <p>플랫폼마다 다른 난이도 표기에 헷갈리셨나요?</p>
        <p>모든 문제를 Solved.ac 난이도로 바꿔드립니다.</p>
      </div>
      <div className="inline-flex gap-x-16 justify-center items-center mt-12">
        <p className="text-5xl font-bold text-[#FFA800]">Lv. 3</p>
        <FontAwesomeIcon icon={faAnglesRight} className="fa-2xl" style={{ color: "#cccccc", }}/>
        <img src={`${process.env.PUBLIC_URL}/tier/gold3-sample.png`} alt="로고" className="h-[65px]" />
      </div>
      <p className="mt-40 mb-24 text-5xl font-bold">시작해보세요!</p>
      <p className="text-2xl font-light">
        AllPS와 함께 성장을 위한 첫 걸음을 내딛어보세요!
      </p>
    </div>
  );
}

export default ServiceIntro;
