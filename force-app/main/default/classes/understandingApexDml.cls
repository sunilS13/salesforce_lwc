public class understandingApexDml{
    public static void acclistres(){
        List<account> accList = [select Name from account limit 10];
        System.debug(accList);
    }
    //insert stu;

}