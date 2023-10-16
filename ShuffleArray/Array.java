
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Arrays;

public class Array {
    public static void main(String[] args) {
        
        Integer[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = new ArrayList<>(Arrays.asList(originalArray));
        Collections.shuffle(list);
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        System.out.println(Arrays.toString(shuffledArray));
    }
}
