BEGIN { 
    FS = "," 
    OFS = FS
    printf "Ranking", $7, $4, $5, $6  > "result.csv"
}

{ 
    print i, $7, $4, $5, $6 > "result.csv" 
    i++
}
