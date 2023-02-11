import axios from "axios"

export default async function handler(req, res) {
  // const response = await axios.get('https://raw.githubusercontent.com/Debond-Protocol/EIP-3475/main/EIPS/metadata.json');
  // const data = await response.json();
  res.status(200).json([
    {
      "metadataId":"0001",
      "title":"symbol",
      "_type":"string",
      "description":"Lorem ipsum...",
      "values":"Class symbol 1"
    },
    {
      "metadataId":"0002",
      "title":"category",
      "_type":"string",
      "description":"The category of this financial instrument",
      "values":"security"
    },
    {
      "metadataId":"0003",
      "title":"subcategory",
      "_type":"string",
      "description":"The subcategory of this financial instrument",
      "values":"bond"
    },
    {
      "metadataId":"0004",
      "title":"childCategory",
      "_type":"string",
      "description":"The child category of this financial instrument",
      "values":"zero-coupon callable bond"
    },
    {
      "metadataId":"0100",
      "title":"Issuer",
      "_type":"string",
      "description":"formal name of the token issuer",
      "values":"ABC "
    },
    {
      "metadataId":"0101",
      "title":"IssuerType",
      "_type":"string",
      "description":"Organization‘s type",
      "values":"LTD"
    },
    {
      "metadataId":"0102",
      "title":"IssuerJurisdiction",
      "_type":"string",
      "description":"jurisdiction",
      "values":"US"
    },
    {
      "metadataId":"0103",
      "title":"issuerRegistrationAddress",
      "_type":"string",
      "description":"Address of the established office & Jurisdiction",
      "values":"1st avenue NYK"
    },
    {
      "metadataId":"0104",
      "title":"issuerURL",
      "_type":"string",
      "description":"URL link of the website",
      "values":"https://www.ABC.AI"
    },
    {
      "metadataId":"0105",
      "title":"issuerlogo",
      "_type":"string",
      "description":"URL of stored issuer logo/ media kit details in 64*64 pix png format",
      "values":"https://www.ABC.AI/logo.png"
    },
    {
      "metadataId":"0106",
      "title":"registrationNumber",
      "_type":"string",
      "description":"The registration number of the issuer’s entity",
      "values":"000000000000"
    },
    {
      "metadataId":"1007",
      "title":"pitch URL",
      "_type":"string",
      "description":"link to the pitch deck",
      "values":[
          "https://bit.ly/ABC_pitch.pdf"
      ]
    },
    {
      "metadataId":"1008",
      "title":"industry",
      "_type":"string[]",
      "description":"the registered industry the company is associated",
      "values":[
          "software development",
          "banking software development"
      ]
    },
    {
      "metadataId":"0150",
      "title":"managerName",
      "_type":"string",
      "description":"Person responsible for the management of this financial instrument (consulting firm handling the entities )",
      "values":"Fireblocks LLC"
    },
    {
      "metadataId":"0151",
      "title":"ManagerCode",
      "_type":"string",
      "description":" Legal Entity Identifier (LEI) for defining the responsible regarding the issuance of bond/ securities.",
      "values":"8958801496"
    },
    {
      "metadataId":"0152",
      "title":"custodianName",
      "_type":"string",
      "description":" Registered entity name of the entity providing the custodian services of securities",
      "values":"Fireblocks LLC"
    },
    {
      "metadataId":"0153",
      "title":"Custodian Code",
      "_type":"string",
      "description":"LEI defining the custodian services of the token",
      "values":"8958801496"
    },
    {
      "metadataId":"0154",
      "title":"auditorName",
      "_type":"string",
      "description":" Registered entity name of the entity providing the auditing services of securities",
      "values":"Fireblocks LLC"
    },
    {
      "metadataId":"0155",
      "title":"auditorCode",
      "_type":"string",
      "description":"LEI defining the auditor services of the token",
      "values":"8958801496"
    },
    {
      "metadataId":"2000",
      "title":"securityRegisteredAuthority",
      "_type":"integer",
      "description":"authorities that regulates the security issuance in the jurisdiction",
      "values":"BIS"
    },
    {
      "metadataId":"2001",
      "title":"ISIN",
      "_type":"integer",
      "description":"defining the identifier code of the security(https://www.investopedia.com/terms/i/isin.asp)",
      "values":" US-000402625-0"
    },
    {
      "metadataId":"2002",
      "title":"fundType",
      "_type":"string",
      "description":"defines the category of the investment vehicle associated with this bond",
      "values":[
          "corporate"
      ]
    },
    {
      "metadataId":"2003",
      "title":"riskLevel",
      "_type":"string",
      "description":"defines the risk category assigned by the auditor",
      "values":"AA"
    },
    {
      "metadataId":"2004",
      "title":"intendedDate",
      "_type":"integer",
      "description":"ISO-8601 representation of intended date of issuance of the security",
      "values":"1676038570"
    },
    {
      "metadataId":"2005",
      "title":"shareValue",
      "_type":"integer",
      "description":"defines the value of bond at the time of issuance",
      "values":"900000000"
    },
    {
      "metadataId":"2006",
      "title":"totalBalance",
      "_type":"integer",
      "description":"defines the total number of securities being instantiated since the start . this supply constitutes available supply + redeemed supply + burned supply",
      "values":"100000"
    },
    {
      "metadataId":"2007",
      "title":"amountsPayable",
      "_type":"integer",
      "description":"this is the amount of securities that are issued till date",
      "values":"10000000"
    },
    {
      "metadataId":"2008",
      "title":"currency",
      "_type":"string",
      "description":"code for the asset in which the amount is denominated",
      "values":"USD"
    },
    {
      "metadataId":"2009",
      "title":"collateralAllowed",
      "_type":"address[]",
      "description":"code for the various asset class (crypto/CBDC) in which the amount is denominated",
      "values":[
          "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "0x55d398326f99059ff775485246999027b3197955"
      ]
    },
    {
      "metadataId":"2010",
      "title":"Callable",
      "_type":"boolean",
      "description":"boolean identifying whether the bond is of type callable",
      "values":"True"
    },
    {
      "metadataId":"2011",
      "title":"maturityPeriod",
      "_type":"integer",
      "description":"ISO 8601 seconds of the coupon period for the securities to be able to redeemed(unless not a callable bond)",
      "values":"31104000"
    },
    {
      "metadataId":"2012",
      "title":"specialMaturityRule",
      "_type":"string",
      "description":"defines the specified rules, which defines if the security is matured",
      "values":"when USD/EURO rate is lower than 0.8 for 5 business days"
    },
    {
      "metadataId":"2020",
      "title":"coupon",
      "_type":"boolean",
      "description":"If the bond is with coupons",
      "values":"True"
    },
    {
      "metadataId":"2021",
      "title":"couponRate",
      "_type":"integer",
      "description":"PPM coupon rate",
      "values":"50000"
    },
    {
      "metadataId":"2022",
      "title":"couponPeriod",
      "_type":"integer",
      "description":"ISO 8601 seconds of the coupon period",
      "values":"2592000"
    },
    {
      "metadataId":"2030",
      "title":"fixed-rate",
      "_type":"boolean",
      "description":"boolean identifying whether the bond is of type Fixed rate",
      "values":"True"
    },
    {
      "metadataId":"2031",
      "title":"interestPeriod",
      "_type":"integer",
      "description":"ISO 8601 seconds from the issuance during which holder will be accruing interest (till redemption time)",
      "values":"2592000"
    },
    {
      "metadataId":"2032",
      "title":"interestRate",
      "_type":"integer",
      "description":"PPM interest rate of the security",
      "values":"50000"
    },
    {
      "metadataId":"2033",
      "title":"interestCalculation",
      "_type":"string",
      "description":"formula (in string) being used in order to calculate the coupon rate interest (ref: ) ",
      "values":"interstCalcRate = AnnualCoupon/(parValueOfBond)"
    },
    {
      "metadataId":"2034",
      "title":"interestPaymentAsset",
      "_type":"address[]",
      "description":"defines the  tokens/CBDC accepted by bond issuer to pay interest(if different from Accept Asset/ underlying collateral) ",
      "values":[
          "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "0x55d398326f99059ff775485246999027b3197955"
      ]
    },
    {
      "metadataId":"2035",
      "title":"repaymentAsset",
      "_type":"address[]",
      "description":"defines the  assets/CBDC accepted by bond issuer to repay after redemption ",
      "values":[
          "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "0x55d398326f99059ff775485246999027b3197955"
      ]
    },
    {
      "metadataId":"2040",
      "title":"liquidationRule",
      "_type":"string",
      "description":"Defines the condition (metrics on debt or the collateral risk in string) under which the liquidation of securities takes place",
      "values":"Price-depeg >= 10%, collateral-ratio-of-fund <= 110%"
    },
    {
      "metadataId":"2041",
      "title":"preferredCreditor",
      "_type":"string",
      "description":"Defines the priorities of the repayment after the debtor declares bankruptcy.",
      "values":"Class 1 will always receive 100% of the repayment Class 2 the remainings"
    },
    {
      "metadataId":"2050",
      "title":"qualifiedInvestorRequirement",
      "_type":"string",
      "description":"Defines the conditions (metrics on net holdings, lender minimum ticket etc) that lender needs to have in order to participate in buying securities ",
      "values":"Earning more than 100000 USD per year"
    },
    {
      "metadataId":"2060",
      "title":"APY",
      "_type":"integer",
      "description":"Fixed PPM interest rate for the bond holders (in %)",
      "values":"60000"
    },
    {
      "metadataId":"2070",
      "title":"PL (Profit & Loss statement) of the Fund:",
      "_type":"uint",
      "description":"summarizes the revenues, costs, and expenses incurred during a specified period, usually a quarter or fiscal year (in PPM)",
      "values":"1"
    },
    {
      "metadataId":"2071",
      "title":"quotasToIssue:",
      "_type":"string",
      "description":"Defines the securities supply (out of total supply in ppm) that are available for issuers  on the marketplace",
      "values":"600000"
    },
    {
      "metadataId":"2072",
      "title":"quotasToBeRedeemed",
      "_type":"integer",
      "description":"Defines the securities supply that can be redeemed by the lender after redemption condition is received",
      "values":"100000"
    },
    {
      "metadataId":"2073",
      "title":"numberOfShareholders",
      "_type":"integer",
      "description":"number of the entities that are participating as the potential lenders",
      "values":"200"
    }
  ])
}