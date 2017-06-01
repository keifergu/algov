export const bubbleSort = 
`var list = observe([2,3,4,1]);
var n = list.length;
for(var i = 0; i < n; i++) {
    for(var j = i; j < n; j++)
        if(list[i] > list[j])
            swap(list, i, j);
}
`

export const quickSort = 
`var quickSort`