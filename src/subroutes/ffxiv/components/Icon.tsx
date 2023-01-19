import PLD from "../../../res/img/job_pld.png";
import WAR from "../../../res/img/job_war.png";
import DRK from "../../../res/img/job_drk.png";
import GNB from "../../../res/img/job_gnb.png";
import WHM from "../../../res/img/job_whm.png";
import SCH from "../../../res/img/job_sch.png";
import AST from "../../../res/img/job_ast.png";
import SGE from "../../../res/img/job_sge.png";
import MNK from "../../../res/img/job_mnk.png";
import DRG from "../../../res/img/job_drg.png";
import NIN from "../../../res/img/job_nin.png";
import SAM from "../../../res/img/job_sam.png";
import RPR from "../../../res/img/job_rpr.png";
import BRD from "../../../res/img/job_brd.png";
import MCH from "../../../res/img/job_mch.png";
import DNC from "../../../res/img/job_dnc.png";
import BLM from "../../../res/img/job_blm.png";
import SMN from "../../../res/img/job_smn.png";
import RDM from "../../../res/img/job_rdm.png";
import EMPTY from "../../../res/img/empty.png";
import MARKER_X from "../../../res/img/marker_x.png"
import MARKER_TRIANGLE from "../../../res/img/marker_triangle.png";
import MARKER_CIRCLE from "../../../res/img/marker_circle.png";
import MARKER_SQUARE from "../../../res/img/marker_square.png";
import MARKER_BOSS from "../../../res/img/marker_boss.png";


export enum eIcon {
    PLD, WAR, DRK, GNB,
    WHM, SCH, AST, SGE,
    MNK, DRG, NIN, SAM, RPR,
    BRD, MCH, DNC,
    BLM, SMN, RDM,
    MARKER_X,MARKER_TRIANGLE, MARKER_CIRCLE, MARKER_SQUARE,
    MARKER_BOSS,
    EMPTY
};

const IMAGE_MAP: {[key in eIcon]: string} = {
    [eIcon.PLD]: PLD, [eIcon.WAR]: WAR, [eIcon.DRK]: DRK, [eIcon.GNB]: GNB,
    [eIcon.WHM]: WHM, [eIcon.SCH]: SCH, [eIcon.AST]: AST, [eIcon.SGE]: SGE,
    [eIcon.MNK]: MNK, [eIcon.DRG]: DRG, [eIcon.NIN]: NIN, [eIcon.SAM]: SAM, [eIcon.RPR]: RPR,
    [eIcon.BRD]: BRD, [eIcon.MCH]: MCH, [eIcon.DNC]: DNC,
    [eIcon.BLM]: BLM, [eIcon.SMN]: SMN, [eIcon.RDM]: RDM,
    [eIcon.MARKER_X]: MARKER_X, [eIcon.MARKER_TRIANGLE]: MARKER_TRIANGLE, [eIcon.MARKER_CIRCLE]: MARKER_CIRCLE, [eIcon.MARKER_SQUARE]: MARKER_SQUARE,
    [eIcon.MARKER_BOSS]: MARKER_BOSS,
    [eIcon.EMPTY]: EMPTY
};

function Icon(props: any) {
    return <div className="character-job" style={{backgroundImage: `url("${IMAGE_MAP[props.job as eIcon] || EMPTY}")`}} />
}

export default Icon;