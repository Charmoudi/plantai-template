@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByModelTypeAndPredictedClassIn(String modelType, List<String> predictedClasses);
}
