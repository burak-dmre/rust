use rand::Rng;

fn generate_random_numbers(count: usize, min: i32, max: i32) -> Vec<i32> {
    let mut rng = rand::thread_rng();
    let mut numbers = Vec::with_capacity(count);
    
    for _ in 0..count {
        let num = rng.gen_range(min, max + 1);
        numbers.push(num);
    }
    
    numbers
}

fn main() {
    let count = 10;
    let min = 1;
    let max = 100;
    
    let random_numbers = generate_random_numbers(count, min, max);
    
    println!("Generated random numbers: {:?}", random_numbers);
}
