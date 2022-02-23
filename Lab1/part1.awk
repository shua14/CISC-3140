BEGIN { 
    FS = "," 
    OFS = FS
    ranking = "Ranking"
    total = "Total"
    car_id = $7
    year = $4
    make = $5
    model = $6
    sum = 0
    printf ranking, $7, $4, $5, $6, total> "result.csv"
}

{
    for(i = 8; i <= 32; i++){
        sum += $i
    }
    
    print rank, sum, $7, $4, $5, $6 > "result.csv" 
    
    rank++
    sum = 0
}
