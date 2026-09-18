import os
import glob
from PIL import Image

IMAGE_DIR = 'public/images'

def find_file(pattern):
    matches = glob.glob(os.path.join(IMAGE_DIR, pattern))
    if matches:
        return matches[0]
    return None

def fit_to_square(input_path, output_name, size=1080, inner_ratio=0.90):
    if not input_path or not os.path.exists(input_path):
        print(f"Warning: file not found: {input_path}")
        return None
        
    output_path = os.path.join(IMAGE_DIR, output_name)
    with Image.open(input_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        
        # Sample edge colors from the 4 corners to blend naturally
        corners = [
            img.getpixel((0, 0)),
            img.getpixel((w - 1, 0)),
            img.getpixel((0, h - 1)),
            img.getpixel((w - 1, h - 1)),
            img.getpixel((w // 2, 0)),
            img.getpixel((w // 2, h - 1))
        ]
        avg_r = int(sum(c[0] for c in corners) / len(corners))
        avg_g = int(sum(c[1] for c in corners) / len(corners))
        avg_b = int(sum(c[2] for c in corners) / len(corners))
        bg_color = (avg_r, avg_g, avg_b)
        
        target_inner = int(size * inner_ratio)
        scale = min(target_inner / w, target_inner / h)
        new_w = int(w * scale)
        new_h = int(h * scale)
        
        resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        canvas = Image.new('RGB', (size, size), bg_color)
        offset_x = (size - new_w) // 2
        offset_y = (size - new_h) // 2
        canvas.paste(resized, (offset_x, offset_y))
        
        canvas.save(output_path, 'JPEG', quality=88, optimize=True)
        print(f"Generated: {output_name} ({size}x{size})")
        return f"/images/{output_name}"

def main():
    print("Starting catalog image processing...")
    
    # Locate key base files
    face_cream_user = os.path.join(IMAGE_DIR, 'proxima-face-cream-jar.jpg')
    jar_studio = find_file('*Enhancing_skincare_jar_product_p*')
    lotion_bottle_studio = find_file('*Enhancing_skincare_product_photo*033845*')
    oil_bottle_studio = find_file('*Enhancing_skincare_product_photo*045115*')
    packaging_box = find_file('*Product_packaging_layout_design*')
    routine_wash = os.path.join(IMAGE_DIR, 'proxima-routine-wash.jpeg')
    savon_noir = os.path.join(IMAGE_DIR, 'proxima-savon-noir-oil.jpeg')
    molato_soap_1 = os.path.join(IMAGE_DIR, 'proxima-molato-soap-1.jpeg')
    molato_soap_2 = os.path.join(IMAGE_DIR, 'proxima-molato-soap-2.jpeg')
    snow_white = os.path.join(IMAGE_DIR, 'proxima-snow-white-oil.jpeg')
    set_green = find_file('*Woman_holding_product_bottles*051950*')
    set_bundle = find_file('*Two_women_holding_product_bottles*')
    woman_face_cream = find_file('*Woman_holding_face_cream*')
    woman_body_oil = find_file('*Woman_holding_body_oil*')
    woman_lotion_1 = find_file('*Woman_holding_product_with_hands*0107*')
    woman_lotion_2 = find_file('*Woman_holding_product_with_hands*0109*')
    woman_cheek_1 = find_file('*Woman_holding_product_near_cheek*050905*')
    woman_scrub = find_file('*Woman_applying_body_scrub*')
    woman_hero = find_file('*Woman_posing_for_skincare_photo*')
    woman_skincare = find_file('*Woman_holding_skincare_product*')
    
    # Exact 1-to-1 Mapping from proximaproject.zip
    lotion_pink_src = find_file('*Layout_wireframe_design_element*')
    oil_pink_src = find_file('*Layout_design_specification_fo*')
    gel_pink_src = find_file('*Layout_design_for_product_ad*')
    set_pink_src = find_file('*Woman_holding_product_with_hands*0107*')

    lotion_brown_src = find_file('*Design_layout_of_advertising_ele*')
    oil_brown_src = find_file('*Layout_plan_for_ad_design*')
    cream_brown_src = find_file('*Enhancing_skincare_jar_product_p*')
    gel_brown_src = find_file('*Woman_holding_skincare_product*')
    set_brown_src = find_file('*Changing_skin_complexion*')

    lotion_green_src = find_file('*Layout_design_specifications_f*')
    oil_green_src = find_file('*Designing_ad_layout_element_posi*')
    cream_green_src = find_file('*Enhancing_skincare_product_photo*045115*')
    gel_green_src = find_file('*Two_women_holding_product_bott*')
    set_green_src = find_file('*Woman_holding_product_bottles*051950*')

    # 1. Generate Primary Product Images (1080x1080 Square, Uncropped)
    # PINK LINE (Retinol + Vitamin C)
    fit_to_square(lotion_pink_src, 'proxima-lotion-pink.jpg')
    fit_to_square(oil_pink_src, 'proxima-oil-pink.jpg')
    fit_to_square(face_cream_user, 'proxima-cream-pink.jpg')
    fit_to_square(gel_pink_src, 'proxima-gel-pink.jpg')
    fit_to_square(set_pink_src, 'proxima-set-pink.jpg')
    
    # BROWN LINE (Alpha-Arbutin + Niacinamide)
    fit_to_square(lotion_brown_src, 'proxima-lotion-brown.jpg')
    fit_to_square(oil_brown_src, 'proxima-oil-brown.jpg')
    fit_to_square(cream_brown_src, 'proxima-cream-brown.jpg')
    fit_to_square(gel_brown_src, 'proxima-gel-brown.jpg')
    fit_to_square(set_brown_src, 'proxima-set-brown.jpg')
    
    # GREEN LINE (Vitamin B3)
    fit_to_square(lotion_green_src, 'proxima-lotion-green.jpg')
    fit_to_square(oil_green_src, 'proxima-oil-green.jpg')
    fit_to_square(cream_green_src, 'proxima-cream-green.jpg')
    fit_to_square(gel_green_src, 'proxima-gel-green.jpg')
    fit_to_square(set_green_src, 'proxima-set-green.jpg')
    
    # SPECIALTY
    fit_to_square(molato_soap_1, 'proxima-soap-mulatto.jpg')
    fit_to_square(snow_white, 'proxima-oil-snowwhite.jpg')
    
    # 2. Generate Gallery / Lifestyle / Texture Images
    fit_to_square(woman_hero, 'hero-model.jpg', size=1200, inner_ratio=0.98)
    fit_to_square(woman_lotion_1, 'lifestyle-glow.jpg', size=800, inner_ratio=0.95)
    fit_to_square(woman_cheek_1, 'lifestyle-routine.jpg', size=800, inner_ratio=0.95)
    fit_to_square(woman_face_cream, 'lifestyle-wellness.jpg', size=800, inner_ratio=0.95)
    fit_to_square(woman_skincare, 'lifestyle-outdoor.jpg', size=800, inner_ratio=0.95)
    fit_to_square(woman_scrub, 'lifestyle-scrub.jpg', size=800, inner_ratio=0.95)
    fit_to_square(set_bundle, 'lifestyle-bundle.jpg', size=800, inner_ratio=0.95)
    fit_to_square(molato_soap_2, 'proxima-soap-mulatto-angle.jpg', size=1080, inner_ratio=0.92)
    fit_to_square(packaging_box, 'proxima-packaging-angle.jpg', size=1080, inner_ratio=0.92)
    
    # Texture generated assets
    cream_texture = os.path.join(IMAGE_DIR, 'proxima-cream-texture.jpg')
    if os.path.exists(cream_texture):
        fit_to_square(cream_texture, 'proxima-cream-texture-fit.jpg', size=1080, inner_ratio=0.98)
        
    oil_dropper = os.path.join(IMAGE_DIR, 'proxima-oil-dropper.jpg')
    if os.path.exists(oil_dropper):
        fit_to_square(oil_dropper, 'proxima-oil-dropper-fit.jpg', size=1080, inner_ratio=0.98)

    soap_lather = os.path.join(IMAGE_DIR, 'proxima-soap-lather.jpg')
    if os.path.exists(soap_lather):
        fit_to_square(soap_lather, 'proxima-soap-lather-fit.jpg', size=1080, inner_ratio=0.98)

    print("All catalog and gallery images processed successfully!")

if __name__ == '__main__':
    main()
