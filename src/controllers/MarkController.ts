import Mark from "../models/Mark";

class MarkController {
    index () {} ; 
    save (name? : string , mid? : string , final? : string , activites? : string) {
        if(
            name != "" && 
            mid != "" && 
            final != "" && 
            activites != "" 
        ) {
            return true 
        }
        return false
    } ;
    delete (mark : Mark) {} ;
}
export default MarkController;