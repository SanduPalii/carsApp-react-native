import { neon } from '@neondatabase/serverless'

const sql = neon(
  'postgresql://jsm_cars_owner:8O9YbtkCFGwR@ep-black-dream-a25r8jyv.eu-central-1.aws.neon.tech/jsm_cars?sslmode=require'
)

const posts = await sql('SELECT * FROM posts')
