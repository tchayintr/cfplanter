# Yet another syntactic structure annotation built with passion
### **[CFPlanter.aiat.or.th](https://cfplanter.aiat.or.th)**

CF stands for Cassia fistula, the national tree and national flower of Thailand. We originally aim to annotate syntactic trees for Thai language by composing a metaphor that we are planting trees for our nation towards Thai Computational Linguistics advancement.

To fasten syntactic structure construction, particularly syntactic treebank, we willingly introduce a so-called CFPlanter, web-based anotation tool, implement with passion for researchers and enthusiasts. 

## Annotation modes
*   Simple: Annotating with labeled bracket manually
*   **[Semi](https://ieeexplore.ieee.org/document/8442061)**: Annotating along with artificial advisors

### Semi descriptions
* segment: ฉันกินข้าว → ฉัน กิน ข้าว
* tagging: ฉัน กิน ข้าว → [PPRS ฉัน] [VACT กิน] [NCMN ข้าว]
* parsing: ฉันกินข้าว → [S [NP [PPRS ฉัน]] [VP [VACT กิน] [NP [NCMN ข้าว]]]]

### Common features
* Appearances: alignment, colour, subscript, triangles
* Download: Click on the syntax tree image to download
* Subscripting: Add subscripts manually by using underscore e.g. `[NCMN_s ต้นไม้]`
* Real-time: Graph will update automatically in real-time
* Spacing: Add spaces in Nonterminal node by using double quote e.g. `["VACT ABC" ปลูก]`
* Unicode: Support unicode fonts

## Documentations
*   **[Guidelines](https://digital.library.tu.ac.th/tu_dc/frontend/Info/item/dc:138839)**: Annotation standard, particularly for Thai syntactic structures (soon)

## Contributions
*   **[AIAT](https://aiat.or.th)**: Artificial Intelligence Association of Thailand
*   **[KINDML](https://saki.siit.tu.ac.th/kindml)**: Knowledge Information & Data Management Laboratory at Sirindhorn International Institute of Technology
*   **[Okumura-Takamura-Funakoshi Lab](http://lr-www.pi.titech.ac.jp)**: Natural Language Processing Group at Tokyo Institute of Technology
*   **[jsSyntaxTree](https://github.com/int2str/jssyntaxtree)**: Implementations based on modification of jsSyntaxTree