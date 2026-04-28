const defaultRecipes = [
  {
    id: 1,
    title: "탤스팸동",
    ingredients: [
      { name: "스팸", ea: "슬라이스 5", unit: "장" },
      { name: "밥", ea: "1", unit: "인분" },
      { name: "쪽파", ea: "2", unit: "줄" },
      { name: "계란 노른자", ea: "1", unit: "개" },
      { name: "고춧가루", ea: "1", unit: "큰술" },
      { name: "간장", ea: "2", unit: "큰술" },
      { name: "맛술", ea: "1", unit: "큰술" },
      { name: "설탕", ea: "1", unit: "큰술" },
      { name: "물", ea: "3", unit: "큰술" },
    ],
    steps: ["스팸을 얇게 슬라이스하여 준비한다", "고춧가루, 간장, 맛술, 설탕, 물을 섞어 양념장을 준비한다", "후라이팬에 햄을 노릇하게 굽는다", "양면이 노릇하게 익으면 소스를 붓는다", "따듯한 밥 위에 올린다", "쪽파와 계란 노른자를 위에 올린다"],
    createdAt: "2024-01-01",
    time:30
  },
  {
    id: 2,
    title: "들기름 파스타",
    ingredients: [
      { name: "파스타면", ea: "80", unit: "g" },
      { name: "상추", ea: "5", unit: "장" },
      { name: "계란 노른자", ea: "1", unit: "개" },
      { name: "김가루", ea: "마음껏", unit: "" },
      { name: "통깨", ea: "약간", unit: "" },
      { name: "진간장", ea: "2", unit: "큰술" },
      { name: "쯔유 또는 참치액", ea: "1", unit: "큰술" },
      { name: "설탕", ea: "1/2", unit: "큰술" },
      { name: "들기름", ea: "3", unit: "큰술" },
      { name: "다진마늘", ea: "1/2", unit: "큰술" },
    ],
    steps: ["냄비에 소금 한 큰술을 넣고 파스타면을 10 ~ 13분 익힌다", "파스타면을 찬물로 행궈 물기를 뺀다", "상추를 돌돌말아 먹기 좋게 썬다", "파스타면에 간장, 쯔유, 설탕, 들기름, 다진마늘을 넣고 잘 비빈다", "그릇에 양념한 파스타면과 야채, 계란노른자, 김가루를 올리고 통깨를 뿌려 마무리한다"],
    createdAt: "2024-01-01",
    time:30
  },
];

export default defaultRecipes;
