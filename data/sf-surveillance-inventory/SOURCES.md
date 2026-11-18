# SF plate-reader policies (Surveillance Technology Policies, Admin Code 19B)

Downloaded 2026-11-17 from https://www.sf.gov/surveillance-technology-inventory. Each `.txt` is `pdftotext -layout` output (Airport is an HTML page, tags stripped).

| File | Department | Source |
|---|---|---|
| sfpd_alpr_stp.pdf | Police (SFPD) | https://www.sf.gov/sites/default/files/2022-03/SFPD_ALPR%20Policy_01.21.2021_1.pdf |
| sfpd_alpr_amend.pdf | Police (SFPD), amendment | https://www.sf.gov/documents/55994/Surveillance_Tech_Policy_Amend.pdf |
| sfmta_lpr_tole_stp.pdf | SFMTA (LPR + transit-only lane cameras) | https://sfgov.legistar.com/View.ashx?M=F&ID=11065541&GUID=A886AD5F-639A-48C9-9D6D-DE2B9D50E6C1 |
| pw_alpr_stp.pdf | Public Works | https://www.sf.gov/sites/default/files/2021-02/PW_Surveillance%20Technology%20Policy_ALPR_FINAL_0.pdf |
| rec_alpr_stp.pdf | Recreation and Park | https://www.sf.gov/sites/default/files/2022-03/REC_Surveillance%20Technology%20Ordinance_ALPR_Policy_COIT.pdf |
| airport_alpr_stp.html | Airport | https://www.sf.gov/airport-automated-license-plate-readers-surveillance-technology-policy |

## Retention, as written (hand-read from the text; re-check before demo)

| Dept | Retention |
|---|---|
| SFPD | 12 months (NCRIC standard); 5 years if tied to a criminal investigation |
| Airport | 18 months on the production server, then 4.5 years in cloud storage |
| Public Works | Maximum 30 days, automatic overwrite |
| Rec & Park | 30–60 days "depending upon the hardware capacity"; request files up to 2 years |
| SFMTA | Varies by use: 14 days (parking citations), 60 days (garage images), 2 years (garage data) |

Gotchas: every policy contains template example text ("retained for 1 year", "generally less than 10 years") that an extractor will mistake for the real answer. SFMTA's retention table is scrambled in the `.txt`; read the PDF.
