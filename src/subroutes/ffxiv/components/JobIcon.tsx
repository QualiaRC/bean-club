
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

const IMAGE_MAP: {[key: string]: string} = {
    PLD, WAR, DRK, GNB,
    WHM, SCH, AST, SGE,
    MNK, DRG, NIN, SAM, RPR,
    BRD, MCH, DNC,
    BLM, SMN, RDM
};


function JobIcon(props: any) {
    return <div className="character-job" style={{backgroundImage: `url("${IMAGE_MAP[props.job] || EMPTY}")`}} />
}

export default JobIcon;