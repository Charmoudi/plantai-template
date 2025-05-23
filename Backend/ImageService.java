@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public List<Image> filterImages(String modelType, List<String> predictedClasses) {
        return imageRepository.findByModelTypeAndPredictedClassIn(modelType, predictedClasses);
    }
}
